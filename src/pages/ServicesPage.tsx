const serviceCategories = [
  {
    category: 'Ladies',
    image: '/haircutservice.jpg',
    services: [
      { name: 'Trim', price: '$45' },
      { name: 'Restyle cut', price: '$60' },
      { name: 'Add Hair wash and dry', price: '+$15' },
      { name: 'Girls', price: '$35' },
    ],
    side: 'left'
  },
  {
    category: 'Men',
    image: '/haircutservice.jpg',
    services: [
      { name: 'Haircut', price: '$40' },
      { name: 'Buzz cut', price: '$25' },
      { name: 'Boys', price: '$30' },
    ],
    side: 'right'
  },
  {
    category: 'Blow Wave',
    image: '/blowwaveservice.jpg',
    services: [
      { name: 'Wash and blow wave medium', price: '$55' },
      { name: 'Long', price: '$65' },
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
      { name: 'Full tint Med', price: '$140' },
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
      { name: 'Half', price: '$150' },
      { name: 'Full (include toner)', price: '$180' },
      { name: 'Balayage', price: 'From $180' },
    ],
    side: 'left'
  },
  {
    category: 'Hair Perm',
    image: '/haircutservice.jpg',
    duration: '2 hours service',
    services: [
      { name: 'Short hair', price: 'From $120' },
      { name: 'Medium', price: 'From $150' },
    ],
    side: 'right'
  },
  {
    category: 'Permanent Straightening',
    image: '/haircutservice.jpg',
    duration: '5 hours service',
    services: [
      { name: 'Permanent straightening', price: 'From $500' },
    ],
    side: 'left'
  },
];

const bookingUrl = 'https://www.picktime.com/926c9651-ba4b-4498-a119-98c3f369501d';

function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#F7F5F2]">
      <section className="py-12 bg-[#F7F5F2]">
        <div className="max-w-full mx-auto">
          <div className="text-center mb-16 px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#2E2E2C]" style={{ fontFamily: "'brandon-grot-w01-light', sans-serif" }}>
              Our <span className="text-[#2E2E2C]">Services</span>
            </h1>
            <p className="text-xl text-[#2E2E2C] max-w-2xl mx-auto">
              Discover our comprehensive range of professional hair services designed to bring out your best look.
            </p>
          </div>

          <div className="space-y-0">
            {serviceCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="relative w-full h-[500px] md:h-[600px] flex items-center"
              >
                {/* Background Image - Takes 4/5 of width */}
                <div className={`absolute inset-0 ${category.side === 'left' ? 'left-0 right-[20%]' : 'right-0 left-[20%]'}`}>
                  <img
                    src={category.image}
                    alt={category.category}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.style.backgroundColor = '#DED6CC';
                    }}
                  />
                  {/* Dark overlay for better text contrast */}
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>

                {/* Services Panel - Takes 1/5 of width, positioned on alternating sides */}
                <div className={`absolute ${category.side === 'left' ? 'right-0' : 'left-0'} w-[20%] h-full bg-[#DED6CC] border-l border-r border-[#C6B27C] flex flex-col justify-center p-6 md:p-8`}>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-[#2E2E2C]" style={{ fontFamily: "'brandon-grot-w01-light', sans-serif" }}>
                    {category.category}
                  </h2>
                  {category.duration && (
                    <p className="text-xs md:text-sm text-[#2E2E2C]/70 mb-4 italic">
                      {category.duration}
                    </p>
                  )}
                  <div className="space-y-2 md:space-y-3 mb-6">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex flex-col md:flex-row md:justify-between md:items-center py-1 md:py-2 border-b border-[#B8ADA3]/30 last:border-b-0">
                        <span className="text-[#2E2E2C] text-sm md:text-base">{service.name}</span>
                        <span className="text-[#2E2E2C] font-semibold text-sm md:text-base md:ml-4">{service.price}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-[#B8ADA3]">
                    <a
                      href={bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#2E2E2C] hover:text-[#C6B27C] transition-colors font-medium text-xs md:text-sm inline-block"
                    >
                      Book Now →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;
