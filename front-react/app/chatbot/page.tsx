import type { Metadata } from "next";
import ChatbotExperience from "@/components/chatbot/ChatbotExperience";

export const metadata: Metadata = {
  title: "TechCorp · Assistant Financier",
  description: "Robot 3D TechCorp avec interface chatbot financière.",
};

export default function ChatbotPage() {
  return <ChatbotExperience />;
}
