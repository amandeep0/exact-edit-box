import { useState } from "react";
import { Rnd } from "react-rnd";
import { 
  ChevronLeft, 
  Download, 
  X, 
  ExternalLink, 
  ChevronDown, 
  Filter,
  Pause,
  Link as LinkIcon 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export const NewsCard = () => {
  const [position, setPosition] = useState({ x: 100, y: 50 });
  const [size, setSize] = useState({ width: 1200, height: 800 });

  return (
    <Rnd
      size={size}
      position={position}
      onDragStop={(e, d) => {
        setPosition({ x: d.x, y: d.y });
      }}
      onResizeStop={(e, direction, ref, delta, position) => {
        setSize({
          width: parseInt(ref.style.width),
          height: parseInt(ref.style.height),
        });
        setPosition(position);
      }}
      minWidth={800}
      minHeight={400}
      bounds="parent"
      className="z-50"
    >
      <div className="w-full h-full bg-[hsl(var(--news-dark-bg))] border-2 border-[hsl(var(--news-border))] rounded-sm shadow-2xl flex flex-col font-mono text-[hsl(var(--news-text))]">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[hsl(var(--news-border))] bg-[hsl(var(--news-darker-bg))]">
          <div className="flex items-center gap-3">
            <span className="text-base font-medium">News</span>
            <LinkIcon className="w-4 h-4" />
            <span className="text-base font-medium">AAPL US</span>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 hover:bg-[hsl(var(--news-badge))]"
            >
              <ExternalLink className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 hover:bg-[hsl(var(--news-badge))]"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Controls Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[hsl(var(--news-border))] bg-[hsl(var(--news-darker-bg))]">
          <div className="flex items-center gap-2">
            <Input
              placeholder="Press / to search"
              className="h-9 w-56 bg-transparent border-[hsl(var(--news-border))] text-sm font-mono placeholder:text-[hsl(var(--news-text-dim))]"
            />
            <Button
              variant="ghost"
              className="h-9 px-3 text-sm font-mono hover:bg-[hsl(var(--news-badge))]"
            >
              Watchlists
              <ChevronDown className="ml-1 h-3 w-3" />
            </Button>
            <Button
              variant="ghost"
              className="h-9 px-3 text-sm font-mono hover:bg-[hsl(var(--news-badge))]"
            >
              All
              <ChevronDown className="ml-1 h-3 w-3" />
            </Button>
            <Button
              variant="ghost"
              className="h-9 px-3 text-sm font-mono hover:bg-[hsl(var(--news-badge))]"
            >
              ↶ Clear
            </Button>
            <Button
              variant="ghost"
              className="h-9 px-3 text-sm font-mono hover:bg-[hsl(var(--news-badge))]"
            >
              <Pause className="mr-1 h-3 w-3" />
              Pause
            </Button>
          </div>
          <Button
            variant="ghost"
            className="h-9 px-3 text-sm font-mono hover:bg-[hsl(var(--news-badge))]"
          >
            <Filter className="mr-1 h-3 w-3" />
            1 Filter
          </Button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-4 py-4">
          <div className="flex flex-col gap-4">
            {/* Back Button */}
            <Button
              variant="ghost"
              className="w-fit h-auto px-0 text-base font-mono hover:bg-transparent hover:text-[hsl(var(--news-border))]"
            >
              <ChevronLeft className="mr-1 h-5 w-5" />
              Back
            </Button>

            {/* Export Button */}
            <div className="flex justify-end">
              <Button
                variant="outline"
                className="h-9 px-4 text-sm font-mono border-[hsl(var(--news-border))] hover:bg-[hsl(var(--news-badge))]"
              >
                Export PDF
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl font-normal leading-tight tracking-wide">
              Inside the race to be India's top smartphone in 2025 [Mint (New Delhi)]
            </h1>

            {/* Stock Tags */}
            <div className="flex gap-2 flex-wrap">
              <Badge className="bg-[hsl(var(--news-badge))] text-[hsl(var(--news-text))] border border-[hsl(var(--news-border))] text-xs font-mono px-2 py-1 hover:bg-[hsl(var(--news-badge))]">
                AAPL
              </Badge>
              <Badge className="bg-[hsl(var(--news-badge))] text-[hsl(var(--news-text))] border border-[hsl(var(--news-border))] text-xs font-mono px-2 py-1 hover:bg-[hsl(var(--news-badge))]">
                005930
              </Badge>
              <Badge className="bg-[hsl(var(--news-badge))] text-[hsl(var(--news-text))] border border-[hsl(var(--news-border))] text-xs font-mono px-2 py-1 hover:bg-[hsl(var(--news-badge))]">
                SSNHZ
              </Badge>
              <Badge className="bg-[hsl(var(--news-badge))] text-[hsl(var(--news-text))] border border-[hsl(var(--news-border))] text-xs font-mono px-2 py-1 hover:bg-[hsl(var(--news-badge))]">
                MVRS
              </Badge>
              <Badge className="bg-[hsl(var(--news-badge))] text-[hsl(var(--news-text))] border border-[hsl(var(--news-border))] text-xs font-mono px-2 py-1 hover:bg-[hsl(var(--news-badge))]">
                META
              </Badge>
            </div>

            {/* Source and Date */}
            <div className="text-sm text-[hsl(var(--news-text-dim))] font-mono">
              Source: Mint (New Delhi) | Publication Date: 10/15/2025 11:40:10 PM
            </div>

            {/* Article Content */}
            <div className="text-sm leading-relaxed text-[hsl(var(--news-text-dim))] font-mono space-y-4">
              <p>
                However, 2025's top flagship smartphone lineup in India- Apple's iPhone 17 Pro Max, 
                Samsung's Galaxy S25 Ultra and Google's Pixel 10 Pro XL-have each offering take distinct 
                approaches to what they have on offer. Prices of the Apple iPhone 17 Pro Max starts at Rs.1.5 
                lakh, going all the way up to Rs.2.3 lakh for a 2 TB storage variant. Samsung's Galaxy S25 
                is priced between...
              </p>

              <div className="border-t border-[hsl(var(--news-border))] pt-4">
                <p>
                  Inside the race to be India's top smartphone in 2025 [Mint (New Delhi)] HT Media
                  New Delhi, Oct. 16 -- NThe battle for the most premium smartphone that you can buy today 
                  leads us to three distinct devices in particular-none of which are a surprise. However, 
                  2025's top flagship smartphone lineup in India-Apple's iPhone 17 Pro Max, Samsung's Galaxy 
                  S25 Ultra and Google's Pixel 10 Pro XL-have each offering take distinct approaches to what 
                  they have on offer. Which, then, should you spend on?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Rnd>
  );
};
