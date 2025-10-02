import Header from './components/ui/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Testimonials from './components/sections/Testimonials';
import MarketInsights from './components/sections/MarketInsights';
import Contact from './components/sections/Contact';
import Footer from './components/ui/Footer';

function App() {
  const handleContactClick = () => {
    // Scroll to hero form
    const heroForm = document.getElementById('lead-form');
    if (heroForm) {
      heroForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onContactClick={handleContactClick} />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <MarketInsights />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;