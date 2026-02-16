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
import useRevealOnScroll from './hooks/useRevealOnScroll';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

function AppContent() {
  useRevealOnScroll();

  return (
    <>
      <ScrollProgress />
      <AmbientBackground />
      <ScrollToTop />
      <Navbar />
      <CartDrawer />
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
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
          {/* Global Loading Screen handled by Suspense fallback mostly, keeping initial one separate if needed, 
              but since we use Suspense inside, we can remove the global absolute LoadingScreen here or keep it for initial mount. 
              Let's keep it simple. */}
          <AppContent />
        </CartProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
