import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingParticles from "@/components/FloatingParticles";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Robina Shaheen | Frontend Developer",

  description:
    "Frontend Developer specializing in React.js, Next.js, TypeScript, Tailwind CSS, and AI-powered web applications.",

  keywords: [
    "Robina Shaheen",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Portfolio",
    "Web Developer",
    "Pakistan",
  ],

  authors: [
    {
      name: "Robina Shaheen",
    },
  ],

  creator: "Robina Shaheen",

  openGraph: {
    title: "Robina Shaheen Portfolio",

    description:
      "Frontend Developer Portfolio built with Next.js and TypeScript.",

    url: "https://YOUR-DOMAIN.vercel.app",

    siteName: "Robina Portfolio",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Robina Shaheen",

    description: "Frontend Developer Portfolio",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* <body className="min-h-full flex flex-col">{children}</body> */}
      <body
        className="
        min-h-screen
        overflow-x-hidden
      "
      >
        <FloatingParticles />
        <main className="relative z-10">
          {children}
        </main>
      </body>

    </html>
  );
}