import { useState, useEffect } from 'react';

interface HeroProps {
  onBookNow: () => void;
}

function Hero({ onBookNow }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Placeholder images - will be replaced with actual images later
  const slides = [
    { id: 1, image: 'placeholder-1', alt: 'Slide 1' },
    { id: 2, image: 'placeholder-2', alt: 'Slide 2' },
    { id: 3, image: 'placeholder-3', alt: 'Slide 3' },
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
            {/* Placeholder black background - replace with actual images later */}
            <div 
              className="w-full h-full bg-black"
              style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>
        ))}
      </div>

      {/* Dark overlay for better text/button visibility */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Book Now Button - Centered */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <button
          onClick={onBookNow}
          className="bg-[#254f6c] text-white px-12 py-5 rounded-full text-xl font-semibold hover:bg-[#1d3d52] transition-all hover:scale-105 shadow-2xl shadow-black/50"
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
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-12 h-3 bg-[#254f6c]'
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
