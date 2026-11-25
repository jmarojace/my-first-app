
import Link from "next/link";
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
  title: "Joshua Mari A. Aro",
  description: "A personal website built with Next.js.",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gray-50">

        <nav className="flex flex-wrap gap-6 border-b bg-white p-5 shadow-sm">
          <Link
            href="/"
            className="font-semibold hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="font-semibold hover:text-blue-600"
          >
            About
          </Link>

          <Link
            href="/projects"
            className="font-semibold hover:text-blue-600"
          >
            Projects
          </Link>
        </nav>

        {children}

      </body>
    </html>
  );
}
