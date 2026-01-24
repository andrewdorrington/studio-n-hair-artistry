import { Award, Users, Heart, Star, Scissors } from 'lucide-react';

function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black to-[#2B5F7F]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-[#2B5F7F]">Studio N</span>
            </h2>

            <p className="text-xl text-gray-400 mb-6 leading-relaxed">
              For over 15 years, Studio N Hair Artistry has been at the forefront of hair styling innovation in New York. Our passion is creating stunning, personalized looks that enhance your natural beauty and boost your confidence.
            </p>

            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              We believe that great hair is an art form. Our team of skilled stylists combines technical expertise with creative vision to deliver exceptional results every time. From the moment you walk through our doors, you'll experience a level of care and attention that sets us apart.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#2B5F7F]/5 p-6 rounded-xl border border-[#2B5F7F]/20">
                <Award className="text-[#2B5F7F] mb-3" size={32} />
                <h3 className="font-semibold text-lg mb-2">Award-Winning</h3>
                <p className="text-sm text-gray-400">Recognized excellence in hair artistry</p>
              </div>

              <div className="bg-[#2B5F7F]/5 p-6 rounded-xl border border-[#2B5F7F]/20">
                <Users className="text-[#2B5F7F] mb-3" size={32} />
                <h3 className="font-semibold text-lg mb-2">Expert Team</h3>
                <p className="text-sm text-gray-400">Highly trained professionals</p>
              </div>

              <div className="bg-[#2B5F7F]/5 p-6 rounded-xl border border-[#2B5F7F]/20">
                <Heart className="text-[#2B5F7F] mb-3" size={32} />
                <h3 className="font-semibold text-lg mb-2">Client First</h3>
                <p className="text-sm text-gray-400">Your satisfaction is our priority</p>
              </div>

              <div className="bg-[#2B5F7F]/5 p-6 rounded-xl border border-[#2B5F7F]/20">
                <Star className="text-[#2B5F7F] mb-3" size={32} />
                <h3 className="font-semibold text-lg mb-2">Premium Products</h3>
                <p className="text-sm text-gray-400">Only the finest hair care brands</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-[#2B5F7F]/20 to-[#2B5F7F]/5 rounded-3xl border border-[#2B5F7F]/30 flex items-center justify-center">
              <div className="text-center">
                <Scissors className="text-[#2B5F7F] mx-auto mb-4" size={80} />
                <p className="text-gray-400 text-lg">Your transformation awaits</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#2B5F7F]/10 rounded-3xl border border-[#2B5F7F]/20 blur-xl"></div>
          </div>
        </div>

        <div className="mt-24 bg-gradient-to-r from-[#2B5F7F]/10 to-transparent p-12 rounded-3xl border border-[#2B5F7F]/20">
          <div className="max-w-3xl">
            <h3 className="text-3xl font-bold mb-4">Our Philosophy</h3>
            <p className="text-lg text-gray-400 leading-relaxed">
              We believe every client deserves a personalized experience. That's why we take the time to understand your lifestyle, preferences, and hair goals before we pick up our scissors. Our commitment to ongoing education ensures we stay ahead of trends and techniques, bringing you the very best in modern hair artistry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
