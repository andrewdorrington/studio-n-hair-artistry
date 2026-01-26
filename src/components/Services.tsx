import { Scissors, Droplet, Palette, Sparkles, Zap, Heart } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Haircuts & Styling',
    description: 'Expert cuts tailored to your unique style and personality. From classic to contemporary, we create looks that turn heads.',
    price: 'From $65'
  },
  {
    icon: Palette,
    title: 'Color Services',
    description: 'Full color, highlights, balayage, and ombre. Our colorists blend art and science for stunning, vibrant results.',
    price: 'From $120'
  },
  {
    icon: Droplet,
    title: 'Hair Treatments',
    description: 'Deep conditioning, keratin treatments, and repair services to restore and maintain your hair\'s natural health and shine.',
    price: 'From $85'
  },
  {
    icon: Sparkles,
    title: 'Special Occasions',
    description: 'Bridal styling, updos, and special event hair. Make your important moments unforgettable with our expertise.',
    price: 'From $150'
  },
  {
    icon: Zap,
    title: 'Extensions',
    description: 'Add length and volume with premium hair extensions. Natural-looking results that seamlessly blend with your hair.',
    price: 'From $300'
  },
  {
    icon: Heart,
    title: 'Consultations',
    description: 'Personalized consultations to understand your hair goals and create a customized plan for your perfect look.',
    price: 'Complimentary'
  }
];

function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-[#2B5F7F]">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of professional hair services designed to bring out your best look.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-[#2B5F7F]/5 to-white p-8 rounded-2xl border border-[#2B5F7F]/20 hover:border-[#2B5F7F]/50 transition-all duration-300 hover:transform hover:scale-105 shadow-sm hover:shadow-lg"
            >
              <div className="w-14 h-14 bg-[#2B5F7F]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#2B5F7F]/20 transition-colors">
                <service.icon className="text-[#2B5F7F]" size={28} />
              </div>

              <h3 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-[#2B5F7F] transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-[#2B5F7F]/20">
                <span className="text-[#2B5F7F] font-semibold text-lg">{service.price}</span>
                <button className="text-sm text-gray-600 hover:text-[#2B5F7F] transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
