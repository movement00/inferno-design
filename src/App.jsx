import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { CartProvider } from './context/CartContext';
import AmbientBackground from './components/AmbientBackground';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';
import FloatingButtons from './components/FloatingButtons';
import CartDrawer from './components/CartDrawer';
import ExitIntentPopup from './components/ExitIntentPopup';
import TimedOfferPopup from './components/TimedOfferPopup';
import CookieBanner from './components/CookieBanner';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function AppContent() {
  return (
    <>
      <ScrollProgress />
      <AmbientBackground />
      <ScrollToTop />
      <Navbar />
      <CartDrawer />
      <Suspense fallback={<LoadingScreen autoHide={false} />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Footer />
      <FloatingButtons />
      <ExitIntentPopup />
      <TimedOfferPopup />
      <CookieBanner />
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <CartProvider>
          <ErrorBoundary>
            <AppContent />
          </ErrorBoundary>
        </CartProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
