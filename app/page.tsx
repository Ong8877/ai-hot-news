export default function Home() {
  // Fake AI news data (we will replace with real API later)
  const news = [
    {
      title: "OpenAI releases new GPT update",
      desc: "OpenAI announced a major upgrade to GPT model with better reasoning.",
      time: "2 hours ago",
    },
    {
      title: "Google introduces new AI tools",
      desc: "Google expands its AI ecosystem with new developer tools.",
      time: "5 hours ago",
    },
    {
      title: "Meta AI becomes more powerful",
      desc: "Meta improves its open-source AI models for developers.",
      time: "1 day ago",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-950 text-white px-6 py-10">
      
      {/* Header Section */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold">
          AI HOT News
        </h1>
        <p className="text-gray-400 mt-2">
          Latest AI updates around the world
        </p>
      </header>

      {/* News List */}
      <section className="grid gap-6">
        {news.map((item, index) => (
          <div
            key={index}
            className="bg-gray-900 p-5 rounded-2xl hover:bg-gray-800 transition"
          >
            {/* News Title */}
            <h2 className="text-xl font-semibold">
              {item.title}
            </h2>

            {/* News Description */}
            <p className="text-gray-400 mt-2">
              {item.desc}
            </p>

            {/* Time */}
            <p className="text-sm text-gray-500 mt-3">
              {item.time}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}