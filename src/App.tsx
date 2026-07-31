import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Footer from './components/Footer';
import ParticleField from './components/ParticleField';
import PrivacyPolicy from './components/PrivacyPolicy';

function HomePage() {
  return (
    <div className="relative min-h-screen bg-dark text-white selection:bg-primary/30 selection:text-white">
      {/* Background layers */}
      <div className="grid-bg" />
      <ParticleField />

      {/* Content */}
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Footer />
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
