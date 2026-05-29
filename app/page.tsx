"use client";

import { useEffect, useState } from "react";

// Define news type
type NewsItem = {
  title: string;
  link: string;
  date: string;
};


export default function Home() {
  // Store news data
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch news from API
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch("/api/news");
        const data = await res.json();

        if (data.success) {
          setNews(data.data);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <main className="min-h-screen bg-gray-950 text-white px-6 py-10">

      {/* Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold">
          AI HOT News
        </h1>
        <p className="text-gray-400 mt-2">
          Live RSS-powered tech news
        </p>
      </header>

      {/* Loading state */}
      {loading && (
        <p className="text-gray-400">
          Loading news...
        </p>
      )}

      {/* News list */}
      <section className="grid gap-6">
        {news.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            className="block bg-gray-900 p-5 rounded-2xl hover:bg-gray-800 transition"
          >
            <h2 className="text-xl font-semibold">
              {item.title}
            </h2>

            <p className="text-sm text-gray-500 mt-3">
              {item.date}
            </p>
          </a>
        ))}
      </section>
    </main>
  );
}