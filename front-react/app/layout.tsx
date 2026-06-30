import type { Metadata } from "next";
import "./globals.css";
import "@/components/chatbot/chatbot.css";

export const metadata: Metadata = {
  title: "Hackatonia Data 2026",
  description: "Frontend Hackatonia Data 2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
