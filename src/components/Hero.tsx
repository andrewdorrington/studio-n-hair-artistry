import { useState, useEffect } from 'react';

interface HeroProps {
  onBookNow: () => void;
}

function Hero({ onBookNow }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  
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
            {/* Hero Image */}
            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
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

      {/* Dark overlay for better text/button visibility */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Book Now Button - Centered */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <button
          onClick={onBookNow}
          className="bg-[#F7F5F2] text-[#2E2E2C] px-12 py-5 text-xl font-semibold hover:bg-[#C6B27C] transition-all hover:scale-105 shadow-2xl shadow-black/50"
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
