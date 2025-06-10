import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://qiita.com/api/v2/authenticated_user/items?page=1&per_page=3",
      {
        headers: {
          Authorization: `Bearer ${process.env.QIITA_ACCESS_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      console.error("Qiita API error:", response.status, response.statusText);
      return NextResponse.json(
        { error: "Failed to fetch posts from Qiita API" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching Qiita posts:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
