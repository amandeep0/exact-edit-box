import { Search, FileText, Calendar, ExternalLink } from "lucide-react";
import { Input } from "@/components/ui/input";

const Filings = () => {
  const filingCategories = [
    {
      type: "10-K",
      count: "20 DOCS",
      filings: [
        { name: "AAPL_2024-11-01", date: "Nov 1, 2024" },
        { name: "AAPL_2023-11-02", date: "Nov 2, 2023" },
        { name: "AAPL_2022-10-27", date: "Oct 27, 2022" },
        { name: "AAPL_2021-10-28", date: "Oct 28, 2021" },
        { name: "AAPL_2020-10-29", date: "Oct 29, 2020" },
        { name: "AAPL_2019-10-30", date: "Oct 30, 2019" },
      ]
    },
    {
      type: "10-Q",
      count: "59 DOCS",
      filings: [
        { name: "AAPL_2025-08-01", date: "Aug 1, 2025" },
        { name: "AAPL_2025-05-02", date: "May 2, 2025" },
        { name: "AAPL_2025-01-31", date: "Jan 31, 2025" },
        { name: "AAPL_2024-08-01", date: "Aug 1, 2024" },
        { name: "AAPL_2024-05-02", date: "May 2, 2024" },
        { name: "AAPL_2024-02-01", date: "Feb 1, 2024" },
      ]
    },
    {
      type: "144",
      count: "20 DOCS",
      filings: [
        { name: "AAPL_2025-04-23", date: "Apr 23, 2025" },
        { name: "AAPL_2025-04-02", date: "Apr 2, 2025" },
        { name: "AAPL_2025-02-03", date: "Feb 3, 2025" },
        { name: "AAPL_2024-12-16", date: "Dec 16, 2024" },
        { name: "AAPL_2024-11-19", date: "Nov 19, 2024" },
        { name: "AAPL_2024-11-18", date: "Nov 18, 2024" },
      ]
    },
    {
      type: "25",
      count: "1 DOCS",
      filings: [
        { name: "AAPL_2019-03-14", date: "Mar 14, 2019" },
      ]
    },
    {
      type: "25-NSE",
      count: "3 DOCS",
      filings: [
        { name: "AAPL_2024-01-17", date: "Jan 17, 2024" },
      ]
    },
    {
      type: "3",
      count: "28 DOCS",
      filings: [
        { name: "AAPL_2025-01-10", date: "Jan 10, 2025" },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-[#d4cec4] p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-6 flex items-center gap-3" style={{ fontFamily: "'JetBrains Mono', monospace", color: "hsl(var(--news-text))" }}>
            <FileText className="w-8 h-8" />
            Filings and Transcripts
          </h1>

          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" style={{ color: "hsl(var(--news-text-dim))" }} />
            <Input
              placeholder="Search company by ticker (e.g. AAPL)"
              className="pl-10 border-2 font-mono"
              style={{
                backgroundColor: "hsl(var(--news-dark-bg))",
                borderColor: "hsl(var(--news-border))",
                color: "hsl(var(--news-text))",
                fontFamily: "'JetBrains Mono', monospace"
              }}
            />
          </div>

          {/* Company Header */}
          <div className="flex items-center gap-3 mb-4 p-4 border-2 rounded-lg" style={{
            backgroundColor: "hsl(var(--news-dark-bg))",
            borderColor: "hsl(var(--news-border))"
          }}>
            <div className="w-8 h-8 rounded bg-black flex items-center justify-center">
              <span className="text-white text-lg">🍎</span>
            </div>
            <span className="font-bold" style={{ fontFamily: "'JetBrains Mono', monospace", color: "hsl(var(--news-text))" }}>
              AAPL
            </span>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-1" style={{ fontFamily: "'JetBrains Mono', monospace", color: "hsl(var(--news-text))" }}>
              AAPL filings & transcripts
            </h2>
            <p className="text-sm" style={{ fontFamily: "'JetBrains Mono', monospace", color: "hsl(var(--news-text-dim))" }}>
              Direct links to recent SEC filings and earnings transcripts grouped by form.
            </p>
          </div>
        </div>

        {/* Filings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filingCategories.map((category) => (
            <div key={category.type} className="border-2 rounded-lg overflow-hidden" style={{ borderColor: "hsl(var(--news-border))" }}>
              {/* Category Header */}
              <div className="bg-black text-white p-3 flex justify-between items-center">
                <span className="font-bold" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  {category.type}
                </span>
                <span className="text-sm" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  {category.count}
                </span>
              </div>

              {/* Filings List */}
              <div style={{ backgroundColor: "hsl(var(--news-dark-bg))" }}>
                {category.filings.map((filing, idx) => (
                  <div
                    key={idx}
                    className="p-3 border-b hover:bg-opacity-50 transition-colors cursor-pointer"
                    style={{
                      borderColor: "hsl(var(--news-border))",
                      backgroundColor: idx % 2 === 0 ? "hsl(var(--news-dark-bg))" : "hsl(var(--news-darker-bg))"
                    }}
                  >
                    <div className="flex justify-between items-center gap-4">
                      <div className="flex items-center gap-2 flex-1">
                        <FileText className="w-4 h-4" style={{ color: "hsl(var(--news-text-dim))" }} />
                        <span className="text-sm" style={{ fontFamily: "'JetBrains Mono', monospace", color: "hsl(var(--news-text))" }}>
                          {filing.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" style={{ color: "hsl(var(--news-text-dim))" }} />
                          <span className="text-xs" style={{ fontFamily: "'JetBrains Mono', monospace", color: "hsl(var(--news-text-dim))" }}>
                            {filing.date}
                          </span>
                        </div>
                        <button className="flex items-center gap-1 text-xs hover:underline" style={{ fontFamily: "'JetBrains Mono', monospace", color: "hsl(var(--news-text))" }}>
                          <ExternalLink className="w-3 h-3" />
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filings;
