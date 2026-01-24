import { MapPin, Phone, Mail, Clock, Calendar } from 'lucide-react';

function Contact() {
  const handleBookNow = () => {
    window.open('https://www.picktime.com/f687a63b-5f57-4bcb-99b7-c8a50dd745ae', '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#2B5F7F]/5 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-[#2B5F7F]">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready for your transformation? Book your appointment or contact us today.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <button
              onClick={handleBookNow}
              className="bg-[#2B5F7F] text-white px-12 py-5 rounded-full text-xl font-semibold hover:bg-[#234a63] transition-all hover:scale-105 shadow-lg shadow-[#2B5F7F]/20 inline-flex items-center gap-3"
            >
              <Calendar size={24} />
              <span>Book Your Appointment Online</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#2B5F7F]/10 to-transparent p-8 rounded-2xl border border-[#2B5F7F]/20">
              <h3 className="text-2xl font-semibold mb-6 text-center">Contact Information</h3>

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
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#2B5F7F]/10 to-transparent p-8 rounded-2xl border border-[#2B5F7F]/20">
              <h3 className="text-2xl font-semibold mb-6 text-center">Business Hours</h3>
              
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[#2B5F7F]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="text-[#2B5F7F]" size={20} />
                </div>
                <div className="text-gray-400 space-y-1">
                  <p>Monday - Friday: 9am - 8pm</p>
                  <p>Saturday: 9am - 6pm</p>
                  <p>Sunday: 10am - 5pm</p>
                </div>
              </div>

              <div className="pt-6 border-t border-[#2B5F7F]/20">
                <p className="text-gray-400 text-sm leading-relaxed">
                  Walk-ins welcome! While we recommend booking in advance to secure your preferred time slot, we always do our best to accommodate walk-in clients based on availability.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <div className="bg-gradient-to-br from-[#2B5F7F]/10 to-transparent p-8 rounded-2xl border border-[#2B5F7F]/20">
              <h3 className="text-3xl font-semibold mb-8 text-center">Book Your Appointment</h3>
              <div className="flex justify-center">
                <a 
                  href="https://www.picktime.com/f687a63b-5f57-4bcb-99b7-c8a50dd745ae" 
                  className="ptbkbtn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ float: 'none' }}
                >
                  <img 
                    border="0" 
                    src="https://www.picktime.com/img/widgetButtons/BookingPage/picktime-book-online-black.png" 
                    alt="Book an appointment with Studio N Hair Artistry"
                    className="max-w-full h-auto"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
