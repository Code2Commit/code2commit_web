import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Footer from './components/Footer';
import ParticleField from './components/ParticleField';

function App() {
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

export default App;
