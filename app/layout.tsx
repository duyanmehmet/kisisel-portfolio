import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Mehmet Duyan — Backend Developer",
  description:
    "Python ve Node.js ile ölçeklenebilir backend sistemleri ve API altyapıları geliştiriyorum. Backend Developer, API Specialist.",
  keywords: ["backend developer", "python", "nodejs", "fastapi", "api", "türkiye"],
  authors: [{ name: "Mehmet Duyan" }],
  openGraph: {
    title: "Mehmet Duyan — Backend Developer",
    description: "Python ve Node.js ile ölçeklenebilir backend sistemleri ve API altyapıları geliştiriyorum.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen font-[var(--font-inter)]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
