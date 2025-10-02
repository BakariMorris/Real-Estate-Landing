import Header from './components/ui/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
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
        
        <section id="testimonials" className="section-padding bg-gray-50">
          <div className="container mx-auto container-padding text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Testimonials Section</h2>
            <p className="text-gray-600">Coming soon...</p>
          </div>
        </section>
        
        <section id="market" className="section-padding">
          <div className="container mx-auto container-padding text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Market Insights Section</h2>
            <p className="text-gray-600">Coming soon...</p>
          </div>
        </section>
        
        <section id="contact" className="section-padding bg-primary-50">
          <div className="container mx-auto container-padding text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Section</h2>
            <p className="text-gray-600">Contact form and information coming soon...</p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;