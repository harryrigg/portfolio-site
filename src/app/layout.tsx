import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ThemeToggle from "@/lib/components/theme-toggle";
import { cn } from "@/lib/utils";

const fantasqueSansMono = localFont({
  src: [
    {
      path: "./fonts/FantasqueSansMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/FantasqueSansMono-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-fantasque-mono",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={cn(
          fantasqueSansMono.variable,
          "relative h-full",
          "font-fantasque antialiased",
          "bg-white dark:bg-neutral-950",
          "text-neutral-950 dark:text-white",
          "transition-colors duration-200",
        )}
      >
        <ThemeToggle className="absolute right-2 top-2" />
        {children}
      </body>
    </html>
  );
}
