import { Name, Title } from "@/lib/constants/config";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: `${Name} - ${Title}`,
    description: `Portfolio of ${Name}, a passionate full-stack developer specializing in React, Next.js, and modern web technologies.`,
    keywords: "developer, portfolio, React, Next.js, TypeScript, full-stack",
    authors: [{ name: Name }],
    viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
        </html>
    );
}
