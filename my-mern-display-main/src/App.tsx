import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BackToTop from "./components/common/BackToTop";
import WhatsAppButton from "./components/WhatsAppButton";
import CalendlyBooking from "./components/CalendlyBooking";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <CalendlyBooking />
      <BackToTop />
      <WhatsAppButton
        phoneNumber="923311068668"
        message="Hi! I’d like to learn more about you."
        position="right"
      />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
