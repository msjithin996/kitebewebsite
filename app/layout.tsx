import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kitebe Clone",
  description: "A clone of the Kitebe website built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={cn(dmSans.className, "bg-[#1C1C1C] text-white antialiased")} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
