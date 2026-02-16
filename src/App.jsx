import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';

function AppContent() {
  useRevealOnScroll();

  return (
    <>
      <ScrollProgress />
      <AmbientBackground />
      <ScrollToTop />
      <Navbar />
      <CartDrawer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
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
    <BrowserRouter>
      <CartProvider>
        <LoadingScreen />
        <AppContent />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
