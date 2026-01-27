import { useState, useEffect } from 'react';

interface HeroProps {
  onBookNow: () => void;
}

function Hero({ onBookNow }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [animatingSlide, setAnimatingSlide] = useState(0);
  
  // Hero banner images
  const slides = [
    { 
      id: 1, 
      image: '/hero-1.png', 
      alt: 'Luxury salon vanity station with gold-framed mirrors and marble countertop' 
    },
    { 
      id: 2, 
      image: '/hero-2.png', 
      alt: 'Modern minimalist salon interior with white styling stations and natural light' 
    },
    { 
      id: 3, 
      image: '/hero-3.png', 
      alt: 'Industrial-chic salon with exposed brick walls and olive green styling chairs' 
    },
  ];

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  // Trigger zoom animation when slide changes
  useEffect(() => {
    if (prefersReducedMotion) {
      setIsLoaded(true);
      return;
    }
    
    // Reset animation state
    setIsLoaded(false);
    setAnimatingSlide(currentSlide);
    
    // Small delay to ensure image is rendered before animation starts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [currentSlide, prefersReducedMotion]);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Hero Image with Zoom Animation */}
            <div className="w-full h-full bg-gray-300 flex items-center justify-center overflow-hidden">
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
                style={{
                  transform: prefersReducedMotion ? 'scale(1)' : (isLoaded && animatingSlide === index) ? 'scale(1)' : 'scale(1.1)',
                  transition: prefersReducedMotion ? 'none' : 'transform 2s ease-out',
                }}
                onError={(e) => {
                  console.error('Failed to load image:', slide.image);
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
                onLoad={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'block';
                }}
                loading="eager"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.35)' }}></div>

      {/* Text Overlay - Centered */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center px-4">
        <h1 
          className="text-5xl md:text-6xl lg:text-7xl font-medium text-[#F7F5F2] mb-4"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500 }}
        >
          Studio N Hair Artistry
        </h1>
        <p 
          className="text-lg md:text-xl lg:text-2xl text-[#F7F5F2] font-normal mb-12"
          style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif", fontWeight: 400 }}
        >
          The fine art of beautiful hair.
        </p>
        {/* Book Now Button */}
        <button
          onClick={onBookNow}
          className="bg-[#F7F5F2] text-[#2E2E2C] px-12 py-5 text-xl font-medium hover:bg-[#C6B27C] transition-all hover:scale-105 shadow-2xl shadow-black/50"
        >
          Book Now
        </button>
      </div>

      {/* Navigation Dots - Bottom Center */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ${
              index === currentSlide
                ? 'w-12 h-3 bg-[#C6B27C]'
                : 'w-3 h-3 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
