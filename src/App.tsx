import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/Index";
import FarmersPage from "./pages/FarmersPage";
import InvestorsPage from "./pages/InvestorsPage";
import MarketplacePage from "./pages/MarketplacePage";
import ServicesPage from "./pages/ServicesPage";
import EducationPage from "./pages/EducationPage";
import RetailersPage from "./pages/RetailersPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/farmers" element={<FarmersPage />} />
            <Route path="/investors" element={<InvestorsPage />} />
            {/* These routes would be implemented in future iterations */}
            <Route path="/marketplace" element={<MarketplacePage />} />
            <Route path="/retailers" element={<RetailersPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/services" element={<ServicesPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
