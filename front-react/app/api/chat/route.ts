import { NextResponse } from "next/server";

const OLLAMA_CHAT_URL =
  process.env.OLLAMA_CHAT_URL ?? "http://178.170.25.232:11434/api/chat";
const OLLAMA_MODEL = process.env.OLLAMA_MODEL ?? "phi3.5-finance";
const SYSTEM_PROMPT = [
  "Tu es l'assistant financier de TechCorp.",
  "Réponds toujours en français, sauf si l'utilisateur demande explicitement une autre langue.",
  "Reste strictement dans le domaine finance, budget, investissement, comptabilité, banque, fiscalité ou économie.",
  "Sois clair, concis et pédagogique.",
  "Si la demande est vague, pose une question de clarification.",
  "Ne donne jamais de conseils pour obtenir de l'argent illégalement, frauder, arnaquer ou contourner la loi.",
  "Pour les demandes irréalistes comme devenir riche vite, explique les risques et propose des pistes légales: budget, épargne, formation, revenus, investissement diversifié.",
].join(" ");

type ChatMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      messages?: ChatMessage[];
      message?: string;
    };

    const userMessages =
      body.messages ??
      (body.message ? [{ role: "user" as const, content: body.message }] : []);

    if (!userMessages.length) {
      return NextResponse.json(
        { error: "Missing message content." },
        { status: 400 },
      );
    }

    const messages: ChatMessage[] = [
      {
        role: "system",
        content: SYSTEM_PROMPT,
      },
      ...userMessages.filter((message) => message.role !== "system"),
    ];

    const response = await fetch(OLLAMA_CHAT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: OLLAMA_MODEL,
        messages,
        stream: false,
        options: {
          temperature: 0.2,
        },
      }),
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      return NextResponse.json(
        {
          error: "Ollama request failed.",
          details: data,
        },
        { status: response.status },
      );
    }

    return NextResponse.json({
      content: data?.message?.content ?? "",
      raw: data,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Unable to contact the chat model.",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 502 },
    );
  }
}
