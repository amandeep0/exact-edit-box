import { Search, FileText, Calendar, ExternalLink, ArrowUpRight } from "lucide-react";
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
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-8 flex items-center gap-3 text-gray-900" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            <FileText className="w-8 h-8" />
            Filings and Transcripts
          </h1>

          <div className="flex items-center gap-4 mb-8">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search company by ticker (e.g. AAPL)"
                className="pl-10 border-2 border-gray-200 bg-gray-50 font-mono text-gray-900 placeholder:text-gray-400"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              />
            </div>

            {/* Company Badge */}
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 border-2 border-gray-200 rounded-lg">
              <div className="w-6 h-6 rounded bg-black flex items-center justify-center">
                <span className="text-white text-sm">🍎</span>
              </div>
              <span className="font-bold text-gray-500" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                AAPL
              </span>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2 text-gray-900" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              AAPL filings & transcripts
            </h2>
            <p className="text-sm text-gray-500" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              Direct links to recent SEC filings and earnings transcripts grouped by form.
            </p>
          </div>
        </div>

        {/* Filings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filingCategories.map((category) => (
            <div key={category.type} className="border-2 border-black rounded-lg overflow-hidden bg-gray-50 aspect-square flex flex-col">
              {/* Category Header */}
              <div className="bg-black text-white p-3 flex justify-between items-center shrink-0">
                <span className="font-bold" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  {category.type}
                </span>
                <span className="text-sm" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  {category.count}
                </span>
              </div>

              {/* Filings List */}
              <div className="bg-white flex-1 overflow-y-auto">
                {category.filings.map((filing, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <div className="flex flex-col gap-2">
                      <div className="flex items-start gap-2">
                        <FileText className="w-3.5 h-3.5 text-gray-400 mt-0.5 shrink-0" />
                        <span className="text-xs text-gray-900 leading-tight" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                          {filing.name}
                        </span>
                      </div>
                      <div className="flex items-center justify-between pl-5">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-gray-400" />
                          <span className="text-xs text-gray-500" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                            {filing.date}
                          </span>
                        </div>
                        <button className="flex items-center gap-1 text-xs text-gray-900 hover:underline" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                          <ArrowUpRight className="w-3 h-3" />
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
