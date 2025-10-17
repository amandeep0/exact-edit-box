import { Paperclip, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Research = () => {
  const tradingIdeas = [
    {
      title: "Follow Pelosi's trading moves.",
      category: "Stocks",
      image: "👩‍💼",
      bgColor: "bg-red-500"
    },
    {
      title: "Backtest Rolling Leaps.",
      category: "Options",
      image: "📊",
      bgColor: "bg-purple-500"
    },
    {
      title: "Election impact on stocks",
      category: "Stocks",
      image: "🗳️",
      bgColor: "bg-blue-500"
    },
    {
      title: "Hurricane impact on insurance companies.",
      category: "Stocks",
      image: "🌀",
      bgColor: "bg-cyan-500"
    },
  ];

  return (
    <div className="min-h-screen bg-[hsl(var(--news-dark-bg))] font-mono">
      <div className="max-w-5xl mx-auto px-8 py-16">
        {/* Logo and Title */}
        <div className="flex flex-col items-center mb-12">
          <div className="w-24 h-24 bg-[hsl(var(--news-text))] rounded-full flex items-center justify-center mb-6">
            <div className="text-5xl">🌅</div>
          </div>
          <h1 className="text-4xl font-bold text-[hsl(var(--news-text))] mb-8">
            Research your trading ideas
          </h1>

          {/* Search Input */}
          <div className="w-full max-w-3xl">
            <div className="relative">
              <Input
                placeholder="Type something and use @ to mention..."
                className="w-full h-20 px-6 border-2 border-[hsl(var(--news-border))] rounded-lg bg-transparent text-[hsl(var(--news-text))] placeholder:text-[hsl(var(--news-text-dim))] text-base"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <Button
                  size="icon"
                  className="rounded-full bg-[hsl(var(--news-text-dim))] hover:bg-[hsl(var(--news-text))] w-10 h-10"
                >
                  <ArrowRight className="w-5 h-5 text-white" />
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 mt-4">
              <Button
                variant="ghost"
                className="text-[hsl(var(--news-text))] hover:bg-[hsl(var(--news-badge))]"
              >
                <Paperclip className="w-4 h-4 mr-2" />
              </Button>
              <Button
                variant="ghost"
                className="text-[hsl(var(--news-text))] hover:bg-[hsl(var(--news-badge))]"
              >
                + Add Trading Platforms
              </Button>
              <Button
                variant="ghost"
                className="text-[hsl(var(--news-text))] hover:bg-[hsl(var(--news-badge))]"
              >
                + Add data sources
              </Button>
            </div>
          </div>
        </div>

        {/* Trading Ideas Grid */}
        <div className="grid grid-cols-2 gap-6 max-w-3xl mx-auto">
          {tradingIdeas.map((idea, index) => (
            <div
              key={index}
              className="border-2 border-[hsl(var(--news-border))] rounded-lg p-6 bg-[hsl(var(--news-darker-bg))] hover:bg-[hsl(var(--news-badge))] transition-colors cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 ${idea.bgColor} rounded-lg flex items-center justify-center text-2xl shrink-0`}>
                  {idea.image}
                </div>
                <div>
                  <h3 className="text-[hsl(var(--news-text))] font-medium mb-1">
                    {idea.title}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-[hsl(var(--news-text-dim))]">
                    <span>📈</span>
                    <span>{idea.category}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t-2 border-[hsl(var(--news-border))] py-6 mt-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-center gap-8 text-sm text-[hsl(var(--news-text-dim))]">
            <a href="#" className="hover:text-[hsl(var(--news-text))]">Agents</a>
            <a href="#" className="hover:text-[hsl(var(--news-text))]">Blog</a>
            <a href="#" className="hover:text-[hsl(var(--news-text))]">Pricing</a>
            <a href="#" className="hover:text-[hsl(var(--news-text))]">Terms of Use</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Research;
