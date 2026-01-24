import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#2B5F7F]/5 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Book Your <span className="text-[#2B5F7F]">Appointment</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready for your transformation? Get in touch with us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#2B5F7F]/5 border border-[#2B5F7F]/20 rounded-lg focus:outline-none focus:border-[#2B5F7F] text-white placeholder-gray-500 transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#2B5F7F]/5 border border-[#2B5F7F]/20 rounded-lg focus:outline-none focus:border-[#2B5F7F] text-white placeholder-gray-500 transition-colors"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#2B5F7F]/5 border border-[#2B5F7F]/20 rounded-lg focus:outline-none focus:border-[#2B5F7F] text-white placeholder-gray-500 transition-colors"
                  placeholder="(555) 123-4567"
                  required
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#2B5F7F]/5 border border-[#2B5F7F]/20 rounded-lg focus:outline-none focus:border-[#2B5F7F] text-white transition-colors"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="haircut">Haircut & Styling</option>
                  <option value="color">Color Services</option>
                  <option value="treatment">Hair Treatment</option>
                  <option value="special">Special Occasion</option>
                  <option value="extensions">Extensions</option>
                  <option value="consultation">Consultation</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-[#2B5F7F]/5 border border-[#2B5F7F]/20 rounded-lg focus:outline-none focus:border-[#2B5F7F] text-white placeholder-gray-500 transition-colors resize-none"
                  placeholder="Tell us about your hair goals..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#2B5F7F] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#234a63] transition-all flex items-center justify-center gap-2 group"
              >
                <span>Send Message</span>
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#2B5F7F]/10 to-transparent p-8 rounded-2xl border border-[#2B5F7F]/20">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2B5F7F]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#2B5F7F]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-gray-400">123 Beauty Lane<br />New York, NY 10001</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2B5F7F]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#2B5F7F]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className="text-gray-400">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2B5F7F]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#2B5F7F]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-gray-400">info@studiohair.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2B5F7F]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-[#2B5F7F]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Hours</h4>
                    <div className="text-gray-400 text-sm space-y-1">
                      <p>Monday - Friday: 9am - 8pm</p>
                      <p>Saturday: 9am - 6pm</p>
                      <p>Sunday: 10am - 5pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#2B5F7F]/10 to-transparent p-8 rounded-2xl border border-[#2B5F7F]/20">
              <h3 className="text-2xl font-semibold mb-4">Walk-ins Welcome</h3>
              <p className="text-gray-400 leading-relaxed">
                While we recommend booking in advance to secure your preferred time slot, we always do our best to accommodate walk-in clients based on availability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
