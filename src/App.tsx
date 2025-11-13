import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import ScrollToTop from "./components/ScrollToTop";
import FloatingButtons from "./components/FloatingButtons";
import LeadFormDialog from "./components/LeadFormDialog";
import AdmissionFormDialog from "./components/AdmissionFormDialog";
import PageTransition from "./components/PageTransition";
import { useState, useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [admissionFormOpen, setAdmissionFormOpen] = useState(false);

  // Make admission form opener available globally
  useEffect(() => {
    (window as any).openAdmissionForm = () => setAdmissionFormOpen(true);
  }, []);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <FloatingButtons />
          <LeadFormDialog />
          <AdmissionFormDialog open={admissionFormOpen} onOpenChange={setAdmissionFormOpen} />
          <Routes>
            {/* Admin route without layout */}
            <Route path="/admin" element={<Admin />} />
            
            {/* Main routes with layout */}
            <Route path="/" element={
              <>
                <Navbar />
                <PageTransition>
                  <Home />
                </PageTransition>
                <Footer />
              </>
            } />
            <Route path="/about" element={
              <>
                <Navbar />
                <PageTransition>
                  <About />
                </PageTransition>
                <Footer />
              </>
            } />
            <Route path="/programs" element={
              <>
                <Navbar />
                <PageTransition>
                  <Programs />
                </PageTransition>
                <Footer />
              </>
            } />
            <Route path="/gallery" element={
              <>
                <Navbar />
                <PageTransition>
                  <GalleryPage />
                </PageTransition>
                <Footer />
              </>
            } />
            <Route path="/contact" element={
              <>
                <Navbar />
                <PageTransition>
                  <ContactPage />
                </PageTransition>
                <Footer />
              </>
            } />

            
            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
