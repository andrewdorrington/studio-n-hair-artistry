const services = [
  {
    title: 'Haircuts',
    image: '/haircutservice.jpg',
    description: 'Expert cuts tailored to your unique style and personality. From classic to contemporary, we create looks that turn heads.',
    price: 'From $65'
  },
  {
    title: 'Blow Waves & Styling',
    image: '/blowwaveservice.jpg',
    description: 'Professional blow-dry styling to give your hair volume, smoothness, and the perfect finish for any occasion.',
    price: 'From $45'
  },
  {
    title: 'Colour Services',
    image: '/colourservice.jpg',
    description: 'Full color, highlights, balayage, and ombre. Our colorists blend art and science for stunning, vibrant results.',
    price: 'From $120'
  }
];

const bookingUrl = 'https://www.picktime.com/926c9651-ba4b-4498-a119-98c3f369501d';

function Services() {
  return (
    <section id="services" className="py-24 bg-[#F7F5F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'brandon-grot-w01-light', sans-serif" }}>
            Our <span className="text-[#2E2E2C]">Services</span>
          </h2>
          <h2 className="text-xl md:text-2xl font-medium mb-4 text-[#2E2E2C]">
            Hair Salon in Mount Waverley
          </h2>
          <p className="text-xl text-[#2E2E2C] max-w-2xl mx-auto">
            Discover our comprehensive range of professional hair services designed to bring out your best look.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative aspect-[3/4] overflow-hidden border border-[#C6B27C] transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              {/* Image - Always Visible */}
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.style.backgroundColor = '#DED6CC';
                  }}
                />
              </div>

              {/* Transparent Text Overlay - Always in Same Position */}
              <div className="absolute inset-0 flex flex-col p-6 justify-between z-10">
                {/* Text at Top */}
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white drop-shadow-lg">
                    {service.title}
                  </h3>
                  <p className="opacity-0 group-hover:opacity-100 text-white text-sm leading-relaxed drop-shadow-lg transition-opacity duration-300">
                    {service.description}
                  </p>
                </div>

                {/* Price and Book Now at Bottom */}
                <div className="flex items-center justify-between pt-4 border-t border-transparent group-hover:border-white/30 mt-auto transition-all duration-300">
                  <span className="opacity-0 group-hover:opacity-100 text-white font-semibold text-base drop-shadow-lg transition-opacity duration-300">
                    {service.price}
                  </span>
                  <a
                    href="/services"
                    onClick={(e) => {
                      e.preventDefault();
                      window.history.pushState({}, '', '/services');
                      window.dispatchEvent(new PopStateEvent('popstate'));
                    }}
                    className="opacity-0 group-hover:opacity-100 text-white text-sm font-semibold drop-shadow-lg transition-opacity duration-300 hover:underline cursor-pointer"
                  >
                    Learn More →
                  </a>
                </div>
              </div>

              {/* Dark Overlay for Better Text Readability */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
