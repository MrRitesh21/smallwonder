import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import FloatingButtons from "./components/FloatingButtons";
import LeadFormDialog from "./components/LeadFormDialog";
import AdmissionFormDialog from "./components/AdmissionFormDialog";
import PageTransition from "./components/PageTransition";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Programs = lazy(() => import("./pages/Programs"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const Admin = lazy(() => import("./pages/Admin"));
const NotFound = lazy(() => import("./pages/NotFound"));

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
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div></div>}>
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
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
