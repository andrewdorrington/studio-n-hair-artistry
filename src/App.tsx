import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleBookNow = () => {
    window.open('https://www.picktime.com/f687a63b-5f57-4bcb-99b7-c8a50dd745ae', '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <nav className="fixed top-0 w-full bg-[#254f6c] backdrop-blur-sm z-50 border-b border-[#254f6c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <img
                src="/studio_n_hair_artistry_logo_with_text_(2).png"
                alt="Studio N Hair Artistry"
                className="h-16 w-auto"
              />
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={() => scrollToSection('home')} className="hover:text-white transition-colors">Home</button>
                <button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Services</button>
                <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">About</button>
                <button onClick={() => scrollToSection('gallery')} className="hover:text-white transition-colors">Gallery</button>
                <button onClick={handleBookNow} className="bg-white text-[#254f6c] px-6 py-2 rounded-full hover:bg-gray-100 transition-colors font-semibold">Book Now</button>
              </div>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-[#254f6c] border-t border-white/20">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 hover:bg-white/10 transition-colors rounded-lg">Home</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 hover:bg-white/10 transition-colors rounded-lg">Services</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 hover:bg-white/10 transition-colors rounded-lg">About</button>
              <button onClick={() => scrollToSection('gallery')} className="block w-full text-left px-3 py-2 hover:bg-white/10 transition-colors rounded-lg">Gallery</button>
              <button onClick={handleBookNow} className="block w-full text-left px-3 py-2 bg-white text-[#254f6c] font-semibold rounded-lg mt-2 hover:bg-gray-100 transition-colors">Book Now</button>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-20">
        <Hero onBookNow={handleBookNow} />
        <Services />
        <About />
        <Gallery />
        <Contact />
      </main>

      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img
                src="/studio_n_hair_artistry_logo_with_text_(2).png"
                alt="Studio N Hair Artistry"
                className="h-16 w-auto mb-4"
              />
              <p className="text-gray-600 text-sm">
                Transforming beauty through artistry and expertise.
              </p>
            </div>

            <div>
              <h3 className="text-[#254f6c] font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>info@studiohair.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>123 Beauty Lane, NY 10001</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-[#254f6c] font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-600 hover:text-[#254f6c] transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-[#254f6c] transition-colors">
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
            <p>&copy; 2026 Studio N Hair Artistry. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
