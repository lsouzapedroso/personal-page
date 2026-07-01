import { NextResponse } from "next/server";
import emailjs from "@emailjs/browser";

interface EmailData {
    email: string;
    subject: string;
    message: string;
}

export async function POST(req: Request) {
    try {
        const { email, subject, message }: EmailData = await req.json();

        await emailjs.send(
            process.env.EMAILJS_SERVICE_ID!,
            process.env.EMAILJS_TEMPLATE_ID!,
            { email, subject, message },
            {
                publicKey: process.env.EMAILJS_PUBLIC_KEY!,
            }
        );

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ success: false, error: error instanceof Error ? error.message : "Unknown error" });
    }
}