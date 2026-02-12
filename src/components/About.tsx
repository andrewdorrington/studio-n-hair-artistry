function About() {
  return (
    <section id="about" className="py-24 bg-[#DED6CC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="lg:col-span-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#2E2E2C]">
              About <span className="text-[#2E2E2C]">Me</span>
            </h2>

            <div className="max-w-2xl">
              <p className="text-xl text-[#2E2E2C] mb-6 leading-relaxed">
                With a career spanning over 25 years, Natalie has mastered the rarest skill in hair artistry: the ability to create looks that are as easy to wear as they are beautiful to look at.
              </p>

              <p className="text-lg text-[#2E2E2C] mb-6 leading-relaxed">
                As the founder of Studio N Hair Artistry, Natalie has moved away from the "over-styled" look of the past. Instead, she focuses on low-maintenance luxury hair that moves naturally, grows out seamlessly, and works with your lifestyle rather than against it. Decades of experience means she understands hair behaviour better than anyone. She knows exactly how a cut will settle and how a colour will fade, ensuring your look lasts weeks, not days.
              </p>

              <p className="text-lg text-[#2E2E2C] mb-6 leading-relaxed">
                A specialist in wavy and curly hair, Natalie's signature "dry-cut" and layering techniques are designed to enhance your natural movement, cutting your morning styling time in half. No guesswork. Natalie provides a master-level assessment of your hair's health and potential, offering "straight-talk" advice to achieve the glow-up you want with the health your hair needs.
              </p>

              <p className="text-lg text-[#2E2E2C] mb-8 leading-relaxed">
                Natalie has perfected the art of the "efficient appointment." She delivers premium, master-stylist results in a fraction of the time, respecting the busy schedules of her professional and local clientele.
              </p>
            </div>

            <blockquote className="text-xl md:text-2xl font-medium text-[#2E2E2C] mb-6 italic border-l-4 border-[#C6B27C] pl-6">
              "Your hair should be your best accessory, not your biggest chore."
            </blockquote>

            <p className="text-lg text-[#2E2E2C] leading-relaxed">
              Whether it's a sun-kissed lived-in blonde or a precision cut that styles itself, Natalie's mission is to give you that 'just-stepped-out-of-the-salon' confidence, every single day.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] bg-[#F7F5F2] border border-[#C6B27C] overflow-hidden">
              <img
                src="/nhat.jpeg"
                alt="About Me"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.style.backgroundColor = '#F7F5F2';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
