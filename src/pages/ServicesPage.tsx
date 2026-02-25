import React from 'react';

const serviceCategories = [
  {
    category: 'Ladies',
    image: '/haircutservice.jpg',
    services: [
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
      { name: 'Foil and Highlight', price: '', isHeading: true, duration: '1-3 hour service' },
      { name: 'Quarter head foil', price: '$85' },
      { name: 'Half head foil', price: '$150' },
      { name: 'Full (include toner) / Balayage', price: 'From $180' },
    ],
    side: 'right'
  },
  {
    category: 'Hair Perm',
    image: '/servicespage.jpg',
    duration: '2 hours service',
    services: [
      { name: 'Short hair', price: 'From $120' },
      { name: 'Medium hair', price: 'From $150' },
      { name: 'Permanent Straightening', price: '', isHeading: true, duration: '5 hours service' },
      { name: '', price: 'From $500' },
    ],
    side: 'right'
  },
];

function BookingModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      
      {/* Modal */}
      <div 
        className="relative bg-[#2E2E2C] rounded-lg shadow-2xl max-w-md w-full p-8 md:p-10 text-center z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#F7F5F2] hover:text-[#C6B27C] transition-colors"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
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

function ServicesPage() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [scrollY, setScrollY] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = React.useState(false);
  const categoryRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
    if (isMobile) return 1; // No scaling on mobile
    const distance = Math.abs(index - activeIndex);
    if (distance === 0) return 1; // Active category is full size
    if (distance === 1) return 0.97; // Adjacent categories very slightly smaller
    return 0.95; // Further categories slightly smaller
  };

  const getOpacity = (index: number) => {
    if (isMobile) return 1; // Full opacity on mobile
    const distance = Math.abs(index - activeIndex);
    if (distance === 0) return 1;
    if (distance === 1) return 0.95;
    return 0.9;
  };

  const getShadow = (index: number) => {
    if (isMobile) return 'none'; // No shadows on mobile
    const distance = Math.abs(index - activeIndex);
    // Darker, more subtle vignette-style shadows
    if (distance === 0) return '0 0 150px 80px rgba(0, 0, 0, 0.5), 0 0 300px 150px rgba(0, 0, 0, 0.3), inset 0 0 100px rgba(0, 0, 0, 0.15)';
    if (distance === 1) return '0 0 120px 60px rgba(0, 0, 0, 0.45), 0 0 250px 120px rgba(0, 0, 0, 0.25)';
    return '0 0 100px 50px rgba(0, 0, 0, 0.4), 0 0 200px 100px rgba(0, 0, 0, 0.2)';
  };

  return (
    <div className="min-h-screen bg-[#F7F5F2]">
      <section className="py-6 md:py-8 lg:py-12 bg-[#2E2E2C] border-b border-[#B8ADA3]/10" style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
        <div className="max-w-full mx-auto">
          <div className="text-center mb-4 md:mb-8 px-4 sm:px-6 lg:px-8 pt-2 md:pt-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2 text-[#F7F5F2]" style={{ fontFamily: "'brandon-grot-w01-light', sans-serif" }}>
              Our <span className="text-[#C6B27C]">Services</span>
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-[#F7F5F2]/70 max-w-2xl mx-auto px-2">
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
                  className="relative w-full h-[600px] md:h-screen flex flex-col md:flex-row items-stretch overflow-hidden transition-all duration-300 ease-out"
                  style={{
                    transform: `scale(${scale})`,
                    opacity: opacity,
                    boxShadow: shadow,
                    transformOrigin: 'center center',
                  }}
                >
                  {/* Background Image - Full width on mobile, 4/5 on desktop */}
                  <div className={`absolute inset-0 ${category.side === 'left' ? 'md:left-0 md:right-[25%]' : 'md:right-0 md:left-[25%]'}`}>
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
                    {/* Subtle gradient overlay - vertical on mobile, horizontal on desktop */}
                    <div className="absolute inset-0 transition-opacity duration-300">
                      {/* Mobile gradient - always vertical */}
                      <div 
                        className="md:hidden absolute inset-0"
                        style={{
                          background: 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.3), transparent)'
                        }}
                      ></div>
                      {/* Desktop gradient - horizontal based on side */}
                      <div 
                        className={`hidden md:block absolute inset-0`}
                        style={{
                          background: categoryIndex === activeIndex 
                            ? `linear-gradient(to ${category.side === 'left' ? 'right' : 'left'}, rgba(0,0,0,0.3), rgba(0,0,0,0.15), transparent)`
                            : `linear-gradient(to ${category.side === 'left' ? 'right' : 'left'}, rgba(0,0,0,0.25), rgba(0,0,0,0.1), transparent)`
                        }}
                      ></div>
                    </div>
                    {/* Darker vignette overlay for blur effect */}
                    <div className="absolute inset-0 md:hidden" style={{
                      boxShadow: 'inset 0 0 100px 50px rgba(0, 0, 0, 0.3)'
                    }}></div>
                    <div className="absolute inset-0 hidden md:block" style={{
                      boxShadow: 'inset 0 0 200px 100px rgba(0, 0, 0, 0.2), inset 0 0 400px 200px rgba(0, 0, 0, 0.1)'
                    }}></div>
                  </div>

                  {/* Services Panel - Full width on mobile, 1/4 on desktop */}
                  <div 
                    className={`relative md:absolute ${category.side === 'left' ? 'md:right-0 md:border-l' : 'md:left-0 md:border-r'} w-full md:w-[25%] md:min-w-[280px] h-auto md:h-full flex flex-col justify-center p-5 md:p-8 lg:p-10 xl:p-12 transition-all duration-300 bg-[#2E2E2C]/95 md:bg-[#2E2E2C] mt-auto`}
                    style={{
                      borderColor: 'rgba(198, 178, 124, 0.2)',
                      boxShadow: isMobile ? 'none' : (categoryIndex === activeIndex 
                        ? '0 0 100px 50px rgba(0, 0, 0, 0.5), 0 0 200px 100px rgba(0, 0, 0, 0.3), inset 0 0 60px rgba(198, 178, 124, 0.05)'
                        : '0 0 80px 40px rgba(0, 0, 0, 0.4), 0 0 150px 75px rgba(0, 0, 0, 0.25)'),
                    }}
                  >
                    <h2 
                      className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 md:mb-3 text-[#F7F5F2] transition-all duration-300 md:transform-none" 
                      style={{ 
                        fontFamily: "'brandon-grot-w01-light', sans-serif",
                      }}
                    >
                      {category.category}
                    </h2>
                    {category.duration && (
                      <p className="text-xs md:text-sm lg:text-base text-[#C6B27C] mb-4 md:mb-6 italic font-light">
                        {category.duration}
                      </p>
                    )}
                    <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                      {category.services.map((service, serviceIndex) => {
                        const isHeading = (service as any).isHeading;
                        const isMainHeading = (service as any).isMainHeading;
                        return isMainHeading ? (
                          <h3
                            key={serviceIndex}
                            className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 md:mb-3 text-[#F7F5F2] transition-all duration-300 md:transform-none"
                            style={{ 
                              fontFamily: "'brandon-grot-w01-light', sans-serif",
                            }}
                          >
                            {service.name}
                          </h3>
                        ) : isHeading ? (
                          <div key={serviceIndex}>
                            <h3
                              className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 md:mb-3 text-[#F7F5F2] transition-all duration-300 md:transform-none"
                              style={{ 
                                fontFamily: "'brandon-grot-w01-light', sans-serif",
                              }}
                            >
                              {service.name}
                            </h3>
                            {(service as any).duration && (
                              <p className="text-xs md:text-sm lg:text-base text-[#C6B27C] mb-3 md:mb-4 italic font-light">
                                {(service as any).duration}
                              </p>
                            )}
                          </div>
                        ) : (
                          <div 
                            key={serviceIndex} 
                            className={`flex ${service.name === '' ? 'justify-start' : 'justify-between'} items-center py-1.5 md:py-2 border-b border-[#B8ADA3]/20 last:border-b-0 transition-all duration-300 ${service.name.startsWith('  ') ? 'pl-3 md:pl-4' : ''}`}
                            style={{
                              transform: 'translateX(0)',
                              opacity: 1,
                            }}
                          >
                            {service.name === '' ? (
                              <span className="text-[#F7F5F2] font-semibold text-sm md:text-base lg:text-lg whitespace-nowrap">{service.price}</span>
                            ) : (
                              <>
                                <span className="text-[#F7F5F2] text-sm md:text-base lg:text-lg pr-2 md:pr-4 break-words">{service.name}</span>
                                {service.price && (
                                  <span className="text-[#C6B27C] font-semibold text-sm md:text-base lg:text-lg whitespace-nowrap ml-2">{service.price}</span>
                                )}
                              </>
                            )}
                          </div>
                        );
                      })}
                    </div>
                    <div className="pt-4 md:pt-6 border-t border-[#B8ADA3]/30">
                      <button
                        onClick={() => setIsBookingModalOpen(true)}
                        className="inline-block bg-[#C6B27C] text-[#2E2E2C] px-5 md:px-6 py-2.5 md:py-3 font-semibold text-xs md:text-sm lg:text-base transition-transform duration-300 hover:scale-110 w-full md:w-auto text-center"
                      >
                        Book Now →
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </div>
  );
}

export default ServicesPage;
