import "./globals.css";
import { Inter } from "next/font/google";
import React, { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Luiz's Portfolio",
    description: "Portfolio",
};

interface RootLayoutProps {
    children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
        <body className={inter.className}>{children}</body>
        </html>
    );
}
