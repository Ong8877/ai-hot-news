import Parser from "rss-parser";

// Create RSS parser instance
const parser = new Parser();

// This API route returns latest AI news
export async function GET() {
  try {
    // Example RSS feed (Hacker News front page)
    const feed = await parser.parseURL(
      "https://news.ycombinator.com/rss"
    );

    // Map RSS items into clean format
    const news = feed.items.slice(0, 10).map((item) => ({
      title: item.title,
      link: item.link,
      date: item.pubDate,
    }));

    // Return JSON response
    return Response.json({
      success: true,
      data: news,
    });
  } catch (error) {
    return Response.json({
      success: false,
      error: "Failed to fetch news",
    });
  }
}