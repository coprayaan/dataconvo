import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const { url } = await fetch("https://www.askyourdatabase.com/api/chatbot/v2/session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + process.env.AYD_API_KEY,
      },
      body: JSON.stringify({
        chatbotid: process.env.CHATBOT_ID,
        name: "POS User",
        email: "pos@example.com",
        // Optional: Add databaseConfig here for tenant isolation
      }),
    }).then((res) => res.json());

    return NextResponse.json({ url });
  } catch (error) {
    console.error("Error creating AYD session:", error);
    return NextResponse.json(
      { error: "Failed to create chatbot session" },
      { status: 500 }
    );
  }
} 