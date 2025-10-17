import { Home, TrendingUp, Filter, BarChart3, Calendar, LineChart, Users, Gauge, Building, Target, PieChart, ChevronLeft } from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";

const menuItems = [
  { title: "Home", url: "/research", icon: Home },
  { title: "Fundamentals", url: "/fundamentals", icon: LineChart },
  { title: "Stock Screener", url: "/stock-screener", icon: Filter },
  { title: "Options Screener", url: "/options-screener", icon: BarChart3 },
  { title: "Earnings Calendar", url: "/earnings", icon: Calendar },
  { title: "Economics", url: "/economics", icon: TrendingUp },
  { title: "Insider Trading", url: "/insider-trading", icon: Users },
  { title: "Options", url: "/options", icon: Gauge },
  { title: "Senator Transactions", url: "/senator", icon: Building },
  { title: "Wall Street Analysts", url: "/analysts", icon: Target },
  { title: "ETF Holdings", url: "/etf", icon: PieChart },
];

export function AppSidebar() {
  const { open } = useSidebar();

  return (
    <Sidebar className="border-r-2 border-[hsl(var(--news-border))] bg-[hsl(var(--news-darker-bg))]">
      <div className="flex flex-col h-full font-mono">
        {/* Header */}
        <div className="p-4 border-b-2 border-[hsl(var(--news-border))]">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-[hsl(var(--news-text))] rounded-full flex items-center justify-center">
              <div className="text-[hsl(var(--news-dark-bg))]">🌅</div>
            </div>
            {open && <span className="text-xl font-bold text-[hsl(var(--news-text))]">Scalar Field</span>}
          </div>
          
          {open && (
            <Button 
              className="w-full justify-between border-2 border-[hsl(var(--news-border))] rounded-full bg-transparent hover:bg-[hsl(var(--news-badge))] text-[hsl(var(--news-text))]"
            >
              New Chat
              <span className="text-lg">⊕</span>
            </Button>
          )}
        </div>

        {/* Navigation */}
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink 
                        to={item.url}
                        className={({ isActive }) => 
                          `flex items-center gap-3 px-4 py-2 text-[hsl(var(--news-text))] hover:bg-[hsl(var(--news-badge))] ${
                            isActive ? 'bg-[hsl(var(--news-badge))] font-bold' : ''
                          }`
                        }
                      >
                        <item.icon className="w-5 h-5" />
                        {open && <span>{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        {/* Footer */}
        <div className="mt-auto border-t-2 border-[hsl(var(--news-border))]">
          {/* Try Pro Section */}
          {open && (
            <div className="p-4 border-b-2 border-[hsl(var(--news-border))]">
              <Button 
                className="w-full border-2 border-[hsl(var(--news-border))] rounded-lg bg-transparent hover:bg-[hsl(var(--news-badge))] text-[hsl(var(--news-text))]"
              >
                <div className="flex flex-col items-center w-full">
                  <span className="font-bold">Try Pro ↗</span>
                  <span className="text-xs text-[hsl(var(--news-text-dim))]">15 Days Free</span>
                </div>
              </Button>
            </div>
          )}

          {/* User Profile */}
          <div className="p-4">
            <div className="flex items-center gap-3">
              <Avatar className="w-8 h-8 bg-teal-500 flex items-center justify-center text-white font-bold">
                A
              </Avatar>
              {open && (
                <div className="flex-1">
                  <div className="text-sm font-bold text-[hsl(var(--news-text))]">Amandeep Singh</div>
                  <div className="text-xs text-[hsl(var(--news-text-dim))]">Free Plan</div>
                </div>
              )}
            </div>
          </div>

          {/* Collapse Button */}
          <div className="p-4 pt-0 flex justify-center">
            <SidebarTrigger className="hover:bg-[hsl(var(--news-badge))] rounded-full p-2">
              <ChevronLeft className={`w-5 h-5 text-[hsl(var(--news-text))] transition-transform ${!open ? 'rotate-180' : ''}`} />
            </SidebarTrigger>
          </div>
        </div>
      </div>
    </Sidebar>
  );
}
