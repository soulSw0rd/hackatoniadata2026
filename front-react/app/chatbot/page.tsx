import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TechCorp · Assistant Financier",
  description: "Robot 3D TechCorp avec interface chatbot financière.",
};

export default function ChatbotPage() {
  return (
    <iframe
      src="/chatbot/index.html"
      title="TechCorp · Assistant Financier"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        border: 0,
      }}
    />
  );
}
