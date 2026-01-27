import { Scissors } from 'lucide-react';

function About() {
  return (
    <section id="about" className="py-24 bg-[#DED6CC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#2E2E2C]">
              About <span className="text-[#2E2E2C]">Me</span>
            </h2>

            <p className="text-xl text-[#2E2E2C] mb-6 leading-relaxed">
              For over 15 years, Studio N Hair Artistry has been at the forefront of hair styling innovation in New York. Our passion is creating stunning, personalized looks that enhance your natural beauty and boost your confidence.
            </p>

            <p className="text-lg text-[#2E2E2C] mb-8 leading-relaxed">
              We believe that great hair is an art form. Our team of skilled stylists combines technical expertise with creative vision to deliver exceptional results every time. From the moment you walk through our doors, you'll experience a level of care and attention that sets us apart.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] bg-[#F7F5F2] border border-[#C6B27C] flex items-center justify-center">
              <div className="text-center">
                <Scissors className="text-[#2E2E2C] mx-auto mb-4" size={80} />
                <p className="text-[#2E2E2C] text-lg">Your transformation awaits</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#B8ADA3] border border-[#B8ADA3] blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
