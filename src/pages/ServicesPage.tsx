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
  const [isBookingModalOpen, setIsBookingModalOpen] = React.useState(false);

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
          {/* List Format - All Screen Sizes */}
          <div>
            {serviceCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="w-full bg-[#2E2E2C] p-6 md:p-10 lg:p-12"
                style={{
                  borderTop: categoryIndex > 0 ? '1px solid rgba(198, 178, 124, 0.2)' : 'none'
                }}
              >
                <h2 
                  className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 md:mb-4 text-[#F7F5F2]" 
                  style={{ 
                    fontFamily: "'brandon-grot-w01-light', sans-serif",
                  }}
                >
                  {category.category}
                </h2>
                {category.duration && (
                  <p className="text-xs md:text-sm lg:text-base text-[#C6B27C] mb-6 md:mb-8 italic font-light">
                    {category.duration}
                  </p>
                )}
                <div className="space-y-4 md:space-y-5 mb-0">
                  {category.services.map((service, serviceIndex) => {
                    const isHeading = (service as any).isHeading;
                    const isMainHeading = (service as any).isMainHeading;
                    return isMainHeading ? (
                      <h3
                        key={serviceIndex}
                        className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-5 mt-6 md:mt-8 text-[#F7F5F2]"
                        style={{ 
                          fontFamily: "'brandon-grot-w01-light', sans-serif",
                        }}
                      >
                        {service.name}
                      </h3>
                    ) : isHeading ? (
                      <div key={serviceIndex} className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-[#B8ADA3]/20">
                        <h3
                          className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 md:mb-4 text-[#F7F5F2]"
                          style={{ 
                            fontFamily: "'brandon-grot-w01-light', sans-serif",
                          }}
                        >
                          {service.name}
                        </h3>
                        {(service as any).duration && (
                          <p className="text-xs md:text-sm lg:text-base text-[#C6B27C] mb-4 md:mb-5 italic font-light">
                            {(service as any).duration}
                          </p>
                        )}
                      </div>
                    ) : (
                      <div 
                        key={serviceIndex} 
                        className={`flex ${service.name === '' ? 'justify-start' : 'justify-between'} items-center py-2 md:py-2.5 border-b border-[#B8ADA3]/20 last:border-b-0 ${service.name.startsWith('  ') ? 'pl-4 md:pl-6' : ''}`}
                      >
                        {service.name === '' ? (
                          <span className="text-[#F7F5F2] font-semibold text-sm md:text-base lg:text-lg whitespace-nowrap">{service.price}</span>
                        ) : (
                          <>
                            <span className="text-[#F7F5F2] text-sm md:text-base lg:text-lg pr-4 md:pr-6 break-words">{service.name}</span>
                            {service.price && (
                              <span className="text-[#C6B27C] font-semibold text-sm md:text-base lg:text-lg whitespace-nowrap ml-4">{service.price}</span>
                            )}
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
            {/* Single Book Now Button at Bottom */}
            <div className="w-full bg-[#2E2E2C] p-8 md:p-10 lg:p-12 border-t border-[#B8ADA3]/30 flex justify-center">
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-[#C6B27C] text-[#2E2E2C] px-8 md:px-10 py-3 md:py-3.5 font-semibold text-base md:text-lg transition-all duration-300 hover:scale-105 hover:bg-[#D4C49A] rounded-sm"
              >
                Book Now →
              </button>
            </div>
          </div>
        </div>
      </section>
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </div>
  );
}

export default ServicesPage;
