import { NextResponse } from "next/server";

const COINGECKO_URL =
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd&include_24hr_change=true";

export async function GET() {
  try {
    const response = await fetch(COINGECKO_URL, {
      next: {
        revalidate: 60,
      },
    });
    const data = await response.json().catch(() => null);

    if (!response.ok) {
      return NextResponse.json(
        {
          error: "CoinGecko request failed.",
          details: data,
        },
        { status: response.status },
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      {
        error: "Unable to contact CoinGecko.",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 502 },
    );
  }
}
