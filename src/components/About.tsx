import { Award, Users, Heart, Star, Scissors } from 'lucide-react';

function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              About <span className="text-[#254f6c]">Studio N</span>
            </h2>

            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              For over 15 years, Studio N Hair Artistry has been at the forefront of hair styling innovation in New York. Our passion is creating stunning, personalized looks that enhance your natural beauty and boost your confidence.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We believe that great hair is an art form. Our team of skilled stylists combines technical expertise with creative vision to deliver exceptional results every time. From the moment you walk through our doors, you'll experience a level of care and attention that sets us apart.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#254f6c]/5 p-6 rounded-xl border border-[#254f6c]/20">
                <Award className="text-[#254f6c] mb-3" size={32} />
                <h3 className="font-semibold text-lg mb-2 text-gray-900">Award-Winning</h3>
                <p className="text-sm text-gray-600">Recognized excellence in hair artistry</p>
              </div>

              <div className="bg-[#254f6c]/5 p-6 rounded-xl border border-[#254f6c]/20">
                <Users className="text-[#254f6c] mb-3" size={32} />
                <h3 className="font-semibold text-lg mb-2 text-gray-900">Expert Team</h3>
                <p className="text-sm text-gray-600">Highly trained professionals</p>
              </div>

              <div className="bg-[#254f6c]/5 p-6 rounded-xl border border-[#254f6c]/20">
                <Heart className="text-[#254f6c] mb-3" size={32} />
                <h3 className="font-semibold text-lg mb-2 text-gray-900">Client First</h3>
                <p className="text-sm text-gray-600">Your satisfaction is our priority</p>
              </div>

              <div className="bg-[#254f6c]/5 p-6 rounded-xl border border-[#254f6c]/20">
                <Star className="text-[#254f6c] mb-3" size={32} />
                <h3 className="font-semibold text-lg mb-2 text-gray-900">Premium Products</h3>
                <p className="text-sm text-gray-600">Only the finest hair care brands</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-[#254f6c]/20 to-[#254f6c]/5 rounded-3xl border border-[#254f6c]/30 flex items-center justify-center">
              <div className="text-center">
                <Scissors className="text-[#254f6c] mx-auto mb-4" size={80} />
                <p className="text-gray-600 text-lg">Your transformation awaits</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#254f6c]/10 rounded-3xl border border-[#254f6c]/20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
