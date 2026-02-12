import React from 'react';

const serviceCategories = [
  {
    category: 'Haircut',
    image: '/haircutservice.jpg',
    services: [
      { name: 'Ladies', price: '', isHeading: true },
      { name: 'Trim', price: '$45' },
      { name: 'Restyle cut', price: '$60' },
      { name: 'Girls', price: '$35' },
      { name: 'Add Hair wash and dry', price: '+$15' },
      { name: 'Mens', price: '', isHeading: true },
      { name: 'Haircut', price: '$40' },
      { name: 'Buzz cut', price: '$25' },
      { name: 'Boys', price: '$30' },
    ],
    side: 'left'
  },
  {
    category: 'Blow Wave & Styling',
    image: '/hero2nhat.jpeg',
    services: [
      { name: 'Wash and blow wave', price: '' },
      { name: '  Medium', price: '$55' },
      { name: '  Long', price: '$65' },
      { name: 'Upstyle formal', price: 'From $80' },
    ],
    side: 'left'
  },
  {
    category: 'Colour',
    image: '/colourservice.jpg',
    duration: '1-2 hour service',
    services: [
      { name: 'Re growth 6-8 week', price: '$85' },
      { name: 'Full tint Short', price: '$120' },
      { name: 'Full tint Medium', price: '$140' },
      { name: 'Full tint Long', price: '$160' },
    ],
    side: 'right'
  },
  {
    category: 'Foil and Highlight',
    image: '/colourservice.jpg',
    duration: '1-3 hour service',
    services: [
      { name: 'Quarter head foil', price: '$85' },
      { name: 'Half head foil', price: '$150' },
      { name: 'Full (include toner) / Balayage', price: 'From $180' },
    ],
    side: 'left'
  },
  {
    category: 'Hair Perm',
    image: '/haircutservice.jpg',
    duration: '2 hours service',
    services: [
      { name: 'Short hair', price: 'From $120' },
      { name: 'Medium hair', price: 'From $150' },
    ],
    side: 'right'
  },
  {
    category: 'Permanent Straightening',
    image: '/haircutservice.jpg',
    duration: '5 hours service',
    services: [
      { name: '', price: 'From $500' },
    ],
    side: 'left'
  },
];

const bookingUrl = 'https://www.picktime.com/926c9651-ba4b-4498-a119-98c3f369501d';

function ServicesPage() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [scrollY, setScrollY] = React.useState(0);
  const categoryRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Find which category is most in view - trigger earlier
      const viewportTop = window.scrollY;
      const viewportBottom = window.scrollY + window.innerHeight;
      const triggerPoint = window.scrollY + window.innerHeight * 0.3; // Trigger at 30% from top instead of center
      
      categoryRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = rect.bottom + window.scrollY;
          const elementCenter = elementTop + rect.height / 2;
          
          // Check if trigger point is within this element's bounds
          if (triggerPoint >= elementTop && triggerPoint <= elementBottom) {
            setActiveIndex(index);
          }
          // Also check if element center is near viewport top third
          else if (elementCenter >= viewportTop && elementCenter <= triggerPoint) {
            setActiveIndex(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getScale = (index: number) => {
    const distance = Math.abs(index - activeIndex);
    if (distance === 0) return 1; // Active category is full size
    if (distance === 1) return 0.97; // Adjacent categories very slightly smaller
    return 0.95; // Further categories slightly smaller
  };

  const getOpacity = (index: number) => {
    const distance = Math.abs(index - activeIndex);
    if (distance === 0) return 1;
    if (distance === 1) return 0.95;
    return 0.9;
  };

  const getShadow = (index: number) => {
    const distance = Math.abs(index - activeIndex);
    // Darker, more subtle vignette-style shadows
    if (distance === 0) return '0 0 150px 80px rgba(0, 0, 0, 0.5), 0 0 300px 150px rgba(0, 0, 0, 0.3), inset 0 0 100px rgba(0, 0, 0, 0.15)';
    if (distance === 1) return '0 0 120px 60px rgba(0, 0, 0, 0.45), 0 0 250px 120px rgba(0, 0, 0, 0.25)';
    return '0 0 100px 50px rgba(0, 0, 0, 0.4), 0 0 200px 100px rgba(0, 0, 0, 0.2)';
  };

  return (
    <div className="min-h-screen bg-[#F7F5F2]">
      <section className="py-8 md:py-12 bg-[#2E2E2C] border-b border-[#B8ADA3]/10">
        <div className="max-w-full mx-auto">
          <div className="text-center mb-8 px-4 sm:px-6 lg:px-8 pt-4">
            <h1 className="text-4xl md:text-5xl font-semibold mb-2 text-[#F7F5F2]" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, letterSpacing: '0.05em' }}>
              Our <span className="text-[#C6B27C]">Services</span>
            </h1>
            <p className="text-base md:text-lg text-[#F7F5F2]/70 max-w-2xl mx-auto">
              Discover our comprehensive range of professional hair services.
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-[#F7F5F2]">
        <div className="max-w-full mx-auto">
          <div className="space-y-2 md:space-y-3">
            {serviceCategories.map((category, categoryIndex) => {
              const scale = getScale(categoryIndex);
              const opacity = getOpacity(categoryIndex);
              const shadow = getShadow(categoryIndex);
              
              return (
                <div
                  key={categoryIndex}
                  ref={(el) => (categoryRefs.current[categoryIndex] = el)}
                  className="relative w-full h-screen flex items-center overflow-hidden transition-all duration-300 ease-out"
                  style={{
                    transform: `scale(${scale})`,
                    opacity: opacity,
                    boxShadow: shadow,
                    transformOrigin: 'center center',
                  }}
                >
                  {/* Background Image - Takes 4/5 of width */}
                  <div className={`absolute inset-0 ${category.side === 'left' ? 'left-0 right-[25%]' : 'right-0 left-[25%]'}`}>
                    <img
                      src={category.image}
                      alt={category.category}
                      className="w-full h-full object-cover transition-transform duration-300 ease-out"
                      style={{
                        transform: categoryIndex === activeIndex ? 'scale(1.02)' : 'scale(1)',
                      }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.style.backgroundColor = '#DED6CC';
                      }}
                    />
                    {/* Subtle gradient overlay */}
                    <div 
                      className={`absolute inset-0 bg-gradient-to-${category.side === 'left' ? 'r' : 'l'} transition-opacity duration-300`}
                      style={{
                        background: categoryIndex === activeIndex 
                          ? `linear-gradient(to ${category.side === 'left' ? 'right' : 'left'}, rgba(0,0,0,0.3), rgba(0,0,0,0.15), transparent)`
                          : `linear-gradient(to ${category.side === 'left' ? 'right' : 'left'}, rgba(0,0,0,0.25), rgba(0,0,0,0.1), transparent)`
                      }}
                    ></div>
                    {/* Darker vignette overlay for blur effect */}
                    <div className="absolute inset-0" style={{
                      boxShadow: 'inset 0 0 200px 100px rgba(0, 0, 0, 0.2), inset 0 0 400px 200px rgba(0, 0, 0, 0.1)'
                    }}></div>
                  </div>

                  {/* Services Panel - Takes 1/4 of width, positioned on alternating sides */}
                  <div 
                    className={`absolute ${category.side === 'left' ? 'right-0 border-l' : 'left-0 border-r'} w-[25%] min-w-[280px] h-full flex flex-col justify-center p-8 md:p-10 lg:p-12 transition-all duration-300`}
                    style={{
                      borderColor: 'rgba(198, 178, 124, 0.2)',
                      boxShadow: categoryIndex === activeIndex 
                        ? '0 0 100px 50px rgba(0, 0, 0, 0.5), 0 0 200px 100px rgba(0, 0, 0, 0.3), inset 0 0 60px rgba(198, 178, 124, 0.05)'
                        : '0 0 80px 40px rgba(0, 0, 0, 0.4), 0 0 150px 75px rgba(0, 0, 0, 0.25)',
                      backgroundColor: categoryIndex === activeIndex ? '#2E2E2C' : '#2E2E2C',
                    }}
                  >
                    <h2 
                      className="text-3xl md:text-4xl font-semibold mb-3 text-[#F7F5F2] transition-all duration-300" 
                      style={{ 
                        fontFamily: "'brandon-grot-w01-light', sans-serif",
                        transform: categoryIndex === activeIndex ? 'translateX(0)' : (category.side === 'left' ? 'translateX(-3px)' : 'translateX(3px)'),
                      }}
                    >
                      {category.category}
                    </h2>
                    {category.duration && (
                      <p className="text-sm md:text-base text-[#C6B27C] mb-6 italic font-light">
                        {category.duration}
                      </p>
                    )}
                    <div className="space-y-4 mb-8">
                      {category.services.map((service, serviceIndex) => {
                        const isHeading = (service as any).isHeading;
                        const isMainHeading = (service as any).isMainHeading;
                        return isMainHeading ? (
                          <h3
                            key={serviceIndex}
                            className="text-3xl md:text-4xl font-semibold mb-3 text-[#F7F5F2] transition-all duration-300"
                            style={{ 
                              fontFamily: "'brandon-grot-w01-light', sans-serif",
                              transform: categoryIndex === activeIndex ? 'translateX(0)' : (category.side === 'left' ? 'translateX(-3px)' : 'translateX(3px)'),
                            }}
                          >
                            {service.name}
                          </h3>
                        ) : isHeading ? (
                          <h3
                            key={serviceIndex}
                            className="text-2xl md:text-3xl font-semibold mb-3 text-[#F7F5F2] transition-all duration-300"
                            style={{ 
                              fontFamily: "'brandon-grot-w01-light', sans-serif",
                              transform: categoryIndex === activeIndex ? 'translateX(0)' : (category.side === 'left' ? 'translateX(-3px)' : 'translateX(3px)'),
                            }}
                          >
                            {service.name}
                          </h3>
                        ) : (
                          <div 
                            key={serviceIndex} 
                            className={`flex ${service.name === '' ? 'justify-start' : 'justify-between'} items-center py-2 border-b border-[#B8ADA3]/20 last:border-b-0 transition-all duration-300 ${service.name.startsWith('  ') ? 'pl-4' : ''}`}
                            style={{
                              transform: categoryIndex === activeIndex 
                                ? 'translateX(0)' 
                                : (category.side === 'left' ? 'translateX(-2px)' : 'translateX(2px)'),
                              opacity: categoryIndex === activeIndex ? 1 : 0.9,
                            }}
                          >
                            {service.name === '' ? (
                              <span className="text-[#C6B27C] font-semibold text-base md:text-lg whitespace-nowrap">{service.price}</span>
                            ) : (
                              <>
                                <span className="text-[#F7F5F2] text-base md:text-lg pr-4">{service.name}</span>
                                {service.price && (
                                  <span className="text-[#C6B27C] font-semibold text-base md:text-lg whitespace-nowrap">{service.price}</span>
                                )}
                              </>
                            )}
                          </div>
                        );
                      })}
                    </div>
                    <div className="pt-6 border-t border-[#B8ADA3]/30">
                      <a
                        href={bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#C6B27C] text-[#2E2E2C] px-6 py-3 font-semibold text-sm md:text-base transition-transform duration-300 hover:scale-110"
                      >
                        Book Now →
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;
