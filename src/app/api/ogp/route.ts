import { NextResponse } from "next/server";
import { JSDOM } from "jsdom";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json(
      { error: "URLが指定されていません" },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(url);

    if (!response.ok) {
      return NextResponse.json(
        { error: `リクエストに失敗しました: ${response.status}` },
        { status: response.status }
      );
    }

    const html = await response.text();

    // JSDOMを使用してOGPタグを抽出
    const dom = new JSDOM(html);
    const document = dom.window.document;
    const ogpData: Record<string, string> = {};

    // metaタグからOGP情報を抽出
    const metaTags = document.querySelectorAll('meta[property^="og:"]');
    metaTags.forEach((tag) => {
      const property = tag.getAttribute("property");
      const content = tag.getAttribute("content");

      if (property && content) {
        const key = property.replace("og:", "");
        ogpData[key] = content;
      }
    });

    return NextResponse.json(ogpData);
  } catch (error) {
    console.error("Error fetching URL:", error);
    return NextResponse.json(
      { error: "記事の取得中にエラーが発生しました" },
      { status: 500 }
    );
  }
}
