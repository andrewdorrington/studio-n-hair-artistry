const serviceCategories = [
  {
    category: 'Ladies',
    services: [
      { name: 'Trim', price: '$45' },
      { name: 'Restyle cut', price: '$60' },
      { name: 'Add Hair wash and dry', price: '+$15' },
      { name: 'Girls', price: '$35' },
    ]
  },
  {
    category: 'Men',
    services: [
      { name: 'Haircut', price: '$40' },
      { name: 'Buzz cut', price: '$25' },
      { name: 'Boys', price: '$30' },
    ]
  },
  {
    category: 'Blow Wave',
    services: [
      { name: 'Wash and blow wave medium', price: '$55' },
      { name: 'Long', price: '$65' },
      { name: 'Upstyle formal', price: 'From $80' },
    ]
  },
  {
    category: 'Colour',
    duration: '1-2 hour service',
    services: [
      { name: 'Re growth 6-8 week', price: '$85' },
      { name: 'Full tint Short', price: '$120' },
      { name: 'Full tint Med', price: '$140' },
      { name: 'Full tint Long', price: '$160' },
    ]
  },
  {
    category: 'Foil and Highlight',
    duration: '1-3 hour service',
    services: [
      { name: 'Quarter head foil', price: '$85' },
      { name: 'Half', price: '$150' },
      { name: 'Full (include toner)', price: '$180' },
      { name: 'Balayage', price: 'From $180' },
    ]
  },
  {
    category: 'Hair Perm',
    duration: '2 hours service',
    services: [
      { name: 'Short hair', price: 'From $120' },
      { name: 'Medium', price: 'From $150' },
    ]
  },
  {
    category: 'Permanent Straightening',
    duration: '5 hours service',
    services: [
      { name: 'Permanent straightening', price: 'From $500' },
    ]
  },
];

const bookingUrl = 'https://www.picktime.com/926c9651-ba4b-4498-a119-98c3f369501d';

function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#F7F5F2]">
      <section className="py-24 bg-[#F7F5F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#2E2E2C]" style={{ fontFamily: "'brandon-grot-w01-light', sans-serif" }}>
              Our <span className="text-[#2E2E2C]">Services</span>
            </h1>
            <p className="text-xl text-[#2E2E2C] max-w-2xl mx-auto">
              Discover our comprehensive range of professional hair services designed to bring out your best look.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {serviceCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="border border-[#C6B27C] bg-[#DED6CC] p-6 transition-all duration-300"
              >
                <h2 className="text-2xl font-semibold mb-2 text-[#2E2E2C]">
                  {category.category}
                </h2>
                {category.duration && (
                  <p className="text-sm text-[#2E2E2C]/70 mb-4 italic">
                    {category.duration}
                  </p>
                )}
                <div className="space-y-3 mb-6">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex justify-between items-center py-2 border-b border-[#B8ADA3]/30 last:border-b-0">
                      <span className="text-[#2E2E2C] text-base">{service.name}</span>
                      <span className="text-[#2E2E2C] font-semibold text-base ml-4">{service.price}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-[#B8ADA3]">
                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2E2E2C] hover:text-[#C6B27C] transition-colors font-medium text-sm inline-block"
                  >
                    Book Now →
                  </a>
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
