import { NextResponse } from "next/server";

export async function GET() {
  try {
    // 環境変数の存在チェック
    const accessToken = process.env.QIITA_ACCESS_TOKEN;

    if (!accessToken) {
      console.error("QIITA_ACCESS_TOKEN environment variable is not set");
      return NextResponse.json(
        { error: "API configuration error" },
        { status: 500 }
      );
    }

    // トークンの一部のみをログに出力（セキュリティのため）
    console.log(
      "Using Qiita access token:",
      accessToken.substring(0, 8) + "..."
    );

    const response = await fetch(
      "https://qiita.com/api/v2/authenticated_user/items?page=1&per_page=3",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.ok) {
      console.error("Qiita API error:", {
        status: response.status,
        statusText: response.statusText,
        url: response.url,
        headers: Object.fromEntries(response.headers.entries()),
      });

      // 401エラーの場合は特別な処理
      if (response.status === 401) {
        console.error("Authentication failed - check QIITA_ACCESS_TOKEN");
        return NextResponse.json(
          { error: "Authentication failed with Qiita API" },
          { status: 401 }
        );
      }

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
