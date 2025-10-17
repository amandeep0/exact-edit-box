import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import Index from "./pages/Index";
import Research from "./pages/Research";
import Filings from "./pages/Filings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/research" element={<MainLayout><Research /></MainLayout>} />
          <Route path="/filings" element={<MainLayout><Filings /></MainLayout>} />
          <Route path="/fundamentals" element={<MainLayout><div className="p-8">Fundamentals Page</div></MainLayout>} />
          <Route path="/stock-screener" element={<MainLayout><div className="p-8">Stock Screener Page</div></MainLayout>} />
          <Route path="/options-screener" element={<MainLayout><div className="p-8">Options Screener Page</div></MainLayout>} />
          <Route path="/earnings" element={<MainLayout><div className="p-8">Earnings Calendar Page</div></MainLayout>} />
          <Route path="/economics" element={<MainLayout><div className="p-8">Economics Page</div></MainLayout>} />
          <Route path="/insider-trading" element={<MainLayout><div className="p-8">Insider Trading Page</div></MainLayout>} />
          <Route path="/options" element={<MainLayout><div className="p-8">Options Page</div></MainLayout>} />
          <Route path="/senator" element={<MainLayout><div className="p-8">Senator Transactions Page</div></MainLayout>} />
          <Route path="/analysts" element={<MainLayout><div className="p-8">Wall Street Analysts Page</div></MainLayout>} />
          <Route path="/etf" element={<MainLayout><div className="p-8">ETF Holdings Page</div></MainLayout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
