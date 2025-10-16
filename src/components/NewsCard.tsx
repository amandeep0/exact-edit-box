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
            <h1 className="text-3xl font-bold leading-tight tracking-wide">
              📰 Daily Trump News Summary - October 15, 2025
            </h1>

            {/* Article Content */}
            <div className="text-sm leading-relaxed text-[hsl(var(--news-text))] font-mono space-y-4 mt-6">
              <p className="font-bold">Summary of Trump-related news:</p>
              
              <p>
                Here are the latest headlines concerning President Donald Trump as of October 16, 2025:
              </p>

              <div className="space-y-4">
                <div>
                  <p className="font-bold">Military Actions:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>
                      <span className="font-bold">U.S. Strike on Alleged Drug Boat:</span> President Trump confirmed a U.S. military airstrike on a vessel near Venezuela, resulting in six fatalities. The operation targeted a boat suspected of drug trafficking and links to narcoterrorist organizations. This marks the fifth such strike since early September, with a total of 27 individuals killed. Legal experts have raised concerns about the justification of these strikes under U.S. and international law. (<a href="https://time.com/7325748/trump-strikes-narcotic-vessel-venezuela/?utm_source=openai" className="text-[hsl(var(--news-border))] hover:underline" target="_blank" rel="noopener noreferrer">time.com</a>)
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-bold">Legal Developments:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>
                      <span className="font-bold">New York Attorney General Indicted:</span> Letitia James, New York's Attorney General, has been indicted on a single count of mortgage fraud related to a home purchase form. She denies any wrongdoing, attributing the issue to a clerical error. Critics view the indictment as potential political retaliation by the Trump administration, especially given James's previous legal actions against Trump and his businesses. (<a href="https://apnews.com/article/68eb74bdbe483f0eed22b6e3165cc7f1?utm_source=openai" className="text-[hsl(var(--news-border))] hover:underline" target="_blank" rel="noopener noreferrer">apnews.com</a>)
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-bold">Health Update:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>
                      <span className="font-bold">President's Health Evaluation:</span> Following a medical evaluation at Walter Reed National Military Medical Center, President Trump has been declared in "exceptional health." His physician reported strong cardiovascular, pulmonary, neurological, and physical performance. The evaluation included preventive health screenings and immunizations in preparation for upcoming international travel. (<a href="https://www.reuters.com/world/us/trump-remains-exceptional-health-doctor-says-2025-10-11/?utm_source=openai" className="text-[hsl(var(--news-border))] hover:underline" target="_blank" rel="noopener noreferrer">reuters.com</a>)
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-bold">Middle East Policy:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>
                      <span className="font-bold">Gaza Conflict Status:</span> President Trump announced that the war in Gaza has concluded, stating, "The war is over, you understand that." This declaration indicates a significant development in the ongoing conflict between Israel and Gaza, suggesting an end to hostilities. (<a href="https://www.reuters.com/world/middle-east/trump-gaza-war-is-over-2025-10-12/?utm_source=openai" className="text-[hsl(var(--news-border))] hover:underline" target="_blank" rel="noopener noreferrer">reuters.com</a>)
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-bold">Government Operations:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>
                      <span className="font-bold">Federal Worker Layoffs Blocked:</span> A federal judge in San Francisco has temporarily blocked the Trump administration from continuing layoffs of federal workers during the ongoing government shutdown. The layoffs were part of a plan to reduce government size and increase pressure on Democratic lawmakers. The shutdown has already delayed critical announcements, such as the Social Security cost-of-living adjustment. (<a href="https://apnews.com/article/3a4747a492e22cd41c4b4547145bf54d?utm_source=openai" className="text-[hsl(var(--news-border))] hover:underline" target="_blank" rel="noopener noreferrer">apnews.com</a>)
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-[hsl(var(--news-border))] pt-4 mt-6">
                <p className="font-bold text-base mb-3">Recent News on President Donald Trump:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <a href="https://time.com/7325748/trump-strikes-narcotic-vessel-venezuela/?utm_source=openai" className="text-[hsl(var(--news-border))] hover:underline" target="_blank" rel="noopener noreferrer">
                      Trump Confirms Latest U.S. Strike on Alleged Drug Boat off Venezuela, Killing Six
                    </a>
                  </li>
                  <li>
                    <a href="https://www.reuters.com/world/us/trump-remains-exceptional-health-doctor-says-2025-10-11/?utm_source=openai" className="text-[hsl(var(--news-border))] hover:underline" target="_blank" rel="noopener noreferrer">
                      Trump remains in 'exceptional health,' doctor says
                    </a>
                  </li>
                  <li>
                    <a href="https://www.reuters.com/world/middle-east/trump-gaza-war-is-over-2025-10-12/?utm_source=openai" className="text-[hsl(var(--news-border))] hover:underline" target="_blank" rel="noopener noreferrer">
                      Trump on Gaza: war is over
                    </a>
                  </li>
                </ul>
              </div>

              <div className="border-t border-[hsl(var(--news-border))] pt-4 mt-6">
                <p className="text-[hsl(var(--news-text-dim))] italic text-xs">
                  Last updated: 2025-10-15 20:45:43 EST
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Rnd>
  );
};
