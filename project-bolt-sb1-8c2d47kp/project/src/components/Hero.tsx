import { Sparkles } from 'lucide-react';

interface HeroProps {
  onBookNow: () => void;
}

function Hero({ onBookNow }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-black to-[#2B5F7F]/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2B5F7F]/5 via-transparent to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-[#2B5F7F]/20 px-4 py-2 rounded-full mb-8 border border-[#2B5F7F]/30">
          <Sparkles size={16} className="text-[#2B5F7F]" />
          <span className="text-sm text-gray-300">Premium Hair Artistry in New York</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Where Beauty Meets
          <span className="block text-[#2B5F7F] mt-2">Artistry</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Experience transformative hair styling from our team of expert stylists.
          We bring your vision to life with precision, creativity, and care.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onBookNow}
            className="bg-[#2B5F7F] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#234a63] transition-all hover:scale-105 shadow-lg shadow-[#2B5F7F]/20"
          >
            Book Your Appointment
          </button>
          <button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-[#2B5F7F] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#2B5F7F]/10 transition-all"
          >
            Explore Services
          </button>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-[#2B5F7F]/5 backdrop-blur-sm p-6 rounded-2xl border border-[#2B5F7F]/20">
            <div className="text-4xl font-bold text-[#2B5F7F] mb-2">15+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
          <div className="bg-[#2B5F7F]/5 backdrop-blur-sm p-6 rounded-2xl border border-[#2B5F7F]/20">
            <div className="text-4xl font-bold text-[#2B5F7F] mb-2">5000+</div>
            <div className="text-gray-400">Happy Clients</div>
          </div>
          <div className="bg-[#2B5F7F]/5 backdrop-blur-sm p-6 rounded-2xl border border-[#2B5F7F]/20">
            <div className="text-4xl font-bold text-[#2B5F7F] mb-2">100%</div>
            <div className="text-gray-400">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
