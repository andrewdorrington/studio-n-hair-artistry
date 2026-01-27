const services = [
  {
    title: 'Haircuts & Styling',
    image: '/placeholder-image.jpeg',
    description: 'Expert cuts tailored to your unique style and personality. From classic to contemporary, we create looks that turn heads.',
    price: 'From $65'
  },
  {
    title: 'Color Services',
    image: '/placeholder-image.jpeg',
    description: 'Full color, highlights, balayage, and ombre. Our colorists blend art and science for stunning, vibrant results.',
    price: 'From $120'
  },
  {
    title: 'Hair Treatments',
    image: '/placeholder-image.jpeg',
    description: 'Deep conditioning, keratin treatments, and repair services to restore and maintain your hair\'s natural health and shine.',
    price: 'From $85'
  },
  {
    title: 'Extensions',
    image: '/placeholder-image.jpeg',
    description: 'Add length and volume with premium hair extensions. Natural-looking results that seamlessly blend with your hair.',
    price: 'From $300'
  }
];

const bookingUrl = 'https://www.picktime.com/f687a63b-5f57-4bcb-99b7-c8a50dd745ae';

function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-[#333333]">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of professional hair services designed to bring out your best look.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative aspect-[3/4] overflow-hidden border border-gray-200 hover:border-gray-400 transition-all duration-300 shadow-sm hover:shadow-lg"
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
                    target.parentElement!.style.backgroundColor = '#f3f4f6';
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
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-0 group-hover:opacity-100 text-white text-sm font-semibold drop-shadow-lg transition-opacity duration-300 hover:underline"
                  >
                    Book Now →
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
