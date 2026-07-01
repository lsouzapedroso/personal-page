import emailjs from "@emailjs/browser";

interface EmailData {
    email: string;
    subject: string;
    message: string;
}

export const sendEmail = async ({ email, subject, message }: EmailData): Promise<void> => {
    try {
        await emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, // ID do serviço
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, // ID do template
            { email, subject, message }, // Dados do e-mail
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! // Chave pública
        );
    } catch (error) {
        console.error("Error sending email:", error);
        throw error;
    }
};