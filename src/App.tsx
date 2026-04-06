import { useState, useEffect, lazy, Suspense } from 'react';
import { Menu, X, Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import ClientFeedback from './components/ClientFeedback';
import Gallery from './components/Gallery';
const Reviews = lazy(() => import('./components/Reviews'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));

function BookingModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      
      <div 
        className="relative bg-[#2E2E2C] rounded-lg shadow-2xl max-w-md w-full p-8 md:p-10 text-center z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#F7F5F2] hover:text-[#C6B27C] transition-colors"
          aria-label="Close"
        >
          <X size={24} />
        </button>
        
        <div className="mt-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#F7F5F2] mb-6" style={{ fontFamily: "'brandon-grot-w01-light', sans-serif" }}>
            Call to Book Now
          </h2>
          <a 
            href="tel:0431207243"
            className="text-3xl md:text-4xl font-semibold text-[#C6B27C] hover:text-[#F7F5F2] transition-colors block mb-6"
          >
            0431 207 243
          </a>
          <p className="text-[#F7F5F2]/70 text-sm md:text-base">
            We're here to help you schedule your appointment
          </p>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    setIsMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleBookNow = () => {
    setIsBookingModalOpen(true);
  };

  // If on services page, show ServicesPage
  if (currentPath === '/services') {
    return (
      <div className="min-h-screen bg-[#F7F5F2] text-[#2E2E2C]">
        <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
        <nav className="fixed top-0 w-full bg-[#2E2E2C] backdrop-blur-sm z-50 border-b border-[#B8ADA3]">
          <div className="w-full flex items-center justify-between h-28">
            <div className="flex items-center pl-0">
              <button onClick={() => navigate('/')} className="cursor-pointer">
                <img
                  src="/studion-logo.png"
                  alt="Studio N Hair Artistry"
                  className="h-24 w-auto"
                />
              </button>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex items-center justify-end">
              <div className="hidden md:block">
                <div className="flex items-baseline space-x-8">
                  <button onClick={() => navigate('/')} className="text-[#F7F5F2] hover:text-[#C6B27C] transition-colors font-medium text-xl">Home</button>
                  <button onClick={() => navigate('/services')} className="text-[#F7F5F2] hover:text-[#C6B27C] transition-colors font-medium text-xl">Services</button>
                  <button onClick={() => navigate('/gallery')} className="text-[#F7F5F2] hover:text-[#C6B27C] transition-colors font-medium text-xl">Gallery</button>
                  <button onClick={handleBookNow} className="bg-[#F7F5F2] text-[#2E2E2C] px-8 py-3 hover:bg-[#C6B27C] transition-colors font-medium text-lg">Book Now</button>
                </div>
              </div>

              <div className="md:hidden pr-4 sm:pr-6 lg:pr-8">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#F7F5F2]">
                  {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
              </div>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden bg-[#2E2E2C] border-t border-[#B8ADA3]/30">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <button onClick={() => navigate('/')} className="block w-full text-left px-3 py-3 hover:bg-[#F7F5F2]/10 transition-colors text-[#F7F5F2] hover:text-[#C6B27C] font-medium text-xl">Home</button>
                <button onClick={() => navigate('/services')} className="block w-full text-left px-3 py-3 hover:bg-[#F7F5F2]/10 transition-colors text-[#F7F5F2] hover:text-[#C6B27C] font-medium text-xl">Services</button>
                <button onClick={() => navigate('/gallery')} className="block w-full text-left px-3 py-3 hover:bg-[#F7F5F2]/10 transition-colors text-[#F7F5F2] hover:text-[#C6B27C] font-medium text-xl">Gallery</button>
                <button onClick={handleBookNow} className="block w-full text-left px-3 py-3 bg-[#F7F5F2] text-[#2E2E2C] font-medium mt-2 hover:bg-[#C6B27C] transition-colors text-lg">Book Now</button>
              </div>
            </div>
          )}
        </nav>

        <main className="pt-28">
          <Suspense fallback={<div className="p-8 text-center">Loading…</div>}>
            <ServicesPage />
          </Suspense>
        </main>
      </div>
    );
  }

  // If on gallery page, show GalleryPage
  if (currentPath === '/gallery') {
    return (
      <div className="min-h-screen bg-[#F7F5F2] text-[#2E2E2C]">
        <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
        <nav className="fixed top-0 w-full bg-[#2E2E2C] backdrop-blur-sm z-50 border-b border-[#B8ADA3]">
          <div className="w-full flex items-center justify-between h-28">
            <div className="flex items-center pl-0">
              <button onClick={() => navigate('/')} className="cursor-pointer">
                <img
                  src="/studion-logo.png"
                  alt="Studio N Hair Artistry"
                  className="h-24 w-auto"
                />
              </button>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex items-center justify-end">
              <div className="hidden md:block">
                <div className="flex items-baseline space-x-8">
                  <button onClick={() => navigate('/')} className="text-[#F7F5F2] hover:text-[#C6B27C] transition-colors font-medium text-xl">Home</button>
                  <button onClick={() => navigate('/services')} className="text-[#F7F5F2] hover:text-[#C6B27C] transition-colors font-medium text-xl">Services</button>
                  <button onClick={() => navigate('/gallery')} className="text-[#F7F5F2] hover:text-[#C6B27C] transition-colors font-medium text-xl">Gallery</button>
                  <button onClick={handleBookNow} className="bg-[#F7F5F2] text-[#2E2E2C] px-8 py-3 hover:bg-[#C6B27C] transition-colors font-medium text-lg">Book Now</button>
                </div>
              </div>

              <div className="md:hidden pr-4 sm:pr-6 lg:pr-8">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#F7F5F2]">
                  {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
              </div>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden bg-[#2E2E2C] border-t border-[#B8ADA3]/30">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <button onClick={() => navigate('/')} className="block w-full text-left px-3 py-3 hover:bg-[#F7F5F2]/10 transition-colors text-[#F7F5F2] hover:text-[#C6B27C] font-medium text-xl">Home</button>
                <button onClick={() => navigate('/services')} className="block w-full text-left px-3 py-3 hover:bg-[#F7F5F2]/10 transition-colors text-[#F7F5F2] hover:text-[#C6B27C] font-medium text-xl">Services</button>
                <button onClick={() => navigate('/gallery')} className="block w-full text-left px-3 py-3 hover:bg-[#F7F5F2]/10 transition-colors text-[#F7F5F2] hover:text-[#C6B27C] font-medium text-xl">Gallery</button>
                <button onClick={handleBookNow} className="block w-full text-left px-3 py-3 bg-[#F7F5F2] text-[#2E2E2C] font-medium mt-2 hover:bg-[#C6B27C] transition-colors text-lg">Book Now</button>
              </div>
            </div>
          )}
        </nav>

        <main className="pt-28">
          <Suspense fallback={<div className="p-8 text-center">Loading…</div>}>
            <GalleryPage />
          </Suspense>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F5F2] text-[#2E2E2C]">
      <nav className="fixed top-0 w-full bg-[#2E2E2C] backdrop-blur-sm z-50 border-b border-[#B8ADA3]">
        <div className="w-full flex items-center justify-between h-28">
          <div className="flex items-center" style={{ paddingLeft: 0 }}>
            <button onClick={() => navigate('/')} className="cursor-pointer">
              <img
                src="/studion-logo.png"
                alt="Studio N Hair Artistry"
                className="h-24 w-auto"
              />
            </button>
            </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex items-center justify-end">
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-8">
                <button onClick={() => scrollToSection('home')} className="text-[#F7F5F2] hover:text-[#C6B27C] transition-colors font-medium text-xl">Home</button>
                <button onClick={() => navigate('/services')} className="text-[#F7F5F2] hover:text-[#C6B27C] transition-colors font-medium text-xl">Services</button>
                <button onClick={() => navigate('/gallery')} className="text-[#F7F5F2] hover:text-[#C6B27C] transition-colors font-medium text-xl">Gallery</button>
                <button onClick={handleBookNow} className="bg-[#F7F5F2] text-[#2E2E2C] px-8 py-3 hover:bg-[#C6B27C] transition-colors font-medium text-lg">Book Now</button>
              </div>
            </div>

            <div className="md:hidden pr-4 sm:pr-6 lg:pr-8">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#F7F5F2]">
                {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-[#2E2E2C] border-t border-[#B8ADA3]/30">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-3 hover:bg-[#F7F5F2]/10 transition-colors text-[#F7F5F2] hover:text-[#C6B27C] font-medium text-xl">Home</button>
              <button onClick={() => navigate('/services')} className="block w-full text-left px-3 py-3 hover:bg-[#F7F5F2]/10 transition-colors text-[#F7F5F2] hover:text-[#C6B27C] font-medium text-xl">Services</button>
              <button onClick={() => navigate('/gallery')} className="block w-full text-left px-3 py-3 hover:bg-[#F7F5F2]/10 transition-colors text-[#F7F5F2] hover:text-[#C6B27C] font-medium text-xl">Gallery</button>
              <button onClick={handleBookNow} className="block w-full text-left px-3 py-3 bg-[#F7F5F2] text-[#2E2E2C] font-medium mt-2 hover:bg-[#C6B27C] transition-colors text-lg">Book Now</button>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-28">
        <Hero onBookNow={handleBookNow} />
        <Services />
        <About />
        <ClientFeedback />
        {/* Google Reviews Widget */}
        <section className="py-16 bg-[#F7F5F2]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Suspense fallback={<div className="p-8 text-center">Loading reviews…</div>}>
              <Reviews />
            </Suspense>
          </div>
        </section>
        <Gallery />
        
        {/* Visit Us Section */}
        <section id="visit-us" className="py-16 bg-[#F7F5F2] border-t border-[#B8ADA3]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2E2E2C] mb-2">
                Visit <span className="text-[#2E2E2C]">Us</span>
              </h2>
              <p className="text-[#2E2E2C]">Find us at our Mount Waverley location</p>
            </div>

            {/* Google Maps Embed */}
            <div className="mb-8 overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://maps.google.com/maps?q=416B%20Huntingdale%20Rd%2C%20Mount%20Waverley%20VIC%203149%2C%20AU&output=embed"
                title="Studio N Hair Artistry Location"
                className="w-full"
              />
            </div>

            {/* Contact Details */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
              <div className="flex items-center gap-3">
                <MapPin className="text-[#2E2E2C]" size={24} />
                <div>
                  <p className="text-[#2E2E2C] font-medium">Address</p>
                  <p className="text-[#2E2E2C]">416B Huntingdale Rd, Mount Waverley VIC 3149</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-[#2E2E2C]" size={24} />
                <div>
                  <p className="text-[#2E2E2C] font-medium">Phone</p>
                  <a href="tel:0431207243" className="text-[#2E2E2C] hover:text-[#C6B27C] transition-colors">
                    0431 207 243
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />

      <footer className="bg-[#2E2E2C] border-t border-[#B8ADA3] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start justify-items-center md:justify-items-start">
            <div className="text-center md:text-left">
              <img
                src="/studion-logo.png"
                alt="Studio N Hair Artistry"
                className="h-[115px] w-auto mb-4 mx-auto md:mx-0"
              />
              <p className="text-[#F7F5F2] text-sm">
                Transforming beauty through artistry and expertise.
              </p>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-[#F7F5F2] font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4 justify-center md:justify-start">
                <a href="https://www.instagram.com/studionhairmountwaverley/" target="_blank" rel="noopener noreferrer" className="text-[#F7F5F2] hover:text-[#C6B27C] transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="https://www.facebook.com/natalies290studio/" target="_blank" rel="noopener noreferrer" className="text-[#F7F5F2] hover:text-[#C6B27C] transition-colors">
                  <Facebook size={24} />
                </a>
              </div>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-[#F7F5F2] font-semibold mb-4">Opening Hours</h3>
              <div className="space-y-2 text-[#F7F5F2] text-xs">
                <div className="flex justify-between items-center gap-4">
                  <span className="font-medium">Monday:</span>
                  <span className="text-right">Closed</span>
                </div>
                <div className="flex justify-between items-center gap-4">
                  <span className="font-medium">Tuesday:</span>
                  <span className="text-right">10am - 3pm</span>
                </div>
                <div className="flex justify-between items-center gap-4">
                  <span className="font-medium">Wednesday:</span>
                  <span className="text-right">10am - 5:30pm</span>
                </div>
                <div className="flex justify-between items-center gap-4">
                  <span className="font-medium">Thursday:</span>
                  <span className="text-right">10am - 5:30pm</span>
                </div>
                <div className="flex justify-between items-center gap-4">
                  <span className="font-medium">Friday:</span>
                  <span className="text-right">10am - 5:30pm</span>
                </div>
                <div className="flex justify-between items-center gap-4">
                  <span className="font-medium">Saturday:</span>
                  <span className="text-right">9am - 3pm</span>
                </div>
                <div className="flex justify-between items-center gap-4">
                  <span className="font-medium">Sunday:</span>
                  <span className="text-right">Closed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-[#B8ADA3] text-center text-sm text-[#F7F5F2]">
            <p>&copy; 2026 Studio N Hair Artistry. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
