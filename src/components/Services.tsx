const services = [
  {
    title: 'Haircuts & Styling',
    image: '/service-haircuts.jpg',
    description: 'Expert cuts tailored to your unique style and personality. From classic to contemporary, we create looks that turn heads.',
    price: 'From $65'
  },
  {
    title: 'Color Services',
    image: '/service-color.jpg',
    description: 'Full color, highlights, balayage, and ombre. Our colorists blend art and science for stunning, vibrant results.',
    price: 'From $120'
  },
  {
    title: 'Hair Treatments',
    image: '/service-treatments.jpg',
    description: 'Deep conditioning, keratin treatments, and repair services to restore and maintain your hair\'s natural health and shine.',
    price: 'From $85'
  },
  {
    title: 'Special Occasions',
    image: '/service-occasions.jpg',
    description: 'Bridal styling, updos, and special event hair. Make your important moments unforgettable with our expertise.',
    price: 'From $150'
  },
  {
    title: 'Extensions',
    image: '/service-extensions.jpg',
    description: 'Add length and volume with premium hair extensions. Natural-looking results that seamlessly blend with your hair.',
    price: 'From $300'
  },
  {
    title: 'Consultations',
    image: '/service-consultations.jpg',
    description: 'Personalized consultations to understand your hair goals and create a customized plan for your perfect look.',
    price: 'Complimentary'
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative aspect-[4/5] overflow-hidden border border-gray-200 hover:border-gray-400 transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              {/* Image with Heading Overlay */}
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
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl md:text-3xl font-semibold text-white text-center px-4">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Hover Content */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col p-6">
                {/* Text at Top */}
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Price and Book Now at Bottom */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 mt-auto">
                  <span className="text-[#333333] font-semibold text-lg">{service.price}</span>
                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-[#333333] transition-colors font-semibold"
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
  );
}

export default Services;
