const services = [
  {
    title: 'Haircuts & Styling',
    description: 'Expert cuts tailored to your unique style and personality. From classic to contemporary, we create looks that turn heads.',
    price: 'From $65'
  },
  {
    title: 'Color Services',
    description: 'Full color, highlights, balayage, and ombre. Our colorists blend art and science for stunning, vibrant results.',
    price: 'From $120'
  },
  {
    title: 'Hair Treatments',
    description: 'Deep conditioning, keratin treatments, and repair services to restore and maintain your hair\'s natural health and shine.',
    price: 'From $85'
  },
  {
    title: 'Extensions',
    description: 'Add length and volume with premium hair extensions. Natural-looking results that seamlessly blend with your hair.',
    price: 'From $300'
  }
];

const bookingUrl = 'https://www.picktime.com/f687a63b-5f57-4bcb-99b7-c8a50dd745ae';

function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Our <span className="text-[#333333]">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of professional hair services designed to bring out your best look.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="border border-gray-200 p-8 hover:border-gray-400 transition-all duration-300"
              >
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-[#333333] font-semibold text-lg">{service.price}</span>
                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#333333] hover:text-gray-600 transition-colors font-semibold text-sm"
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
