function Gallery() {
  const galleryItems = [
    { id: 1, image: '/gallery1.jpg', category: 'Color' },
    { id: 2, image: '/gallery2.jpg', category: 'Styling' },
    { id: 3, image: '/gallery3.jpg', category: 'Cuts' },
    { id: 4, image: '/haircutservice.jpg', category: 'Haircuts' },
    { id: 5, image: '/blowwaveservice.jpg', category: 'Blow Waves' },
    { id: 6, image: '/colourservice.jpg', category: 'Colour Services' },
  ];

  return (
    <section id="gallery" className="py-24 bg-[#F7F5F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#2E2E2C]" style={{ fontFamily: "'brandon-grot-w01-light', sans-serif" }}>
            Our <span className="text-[#2E2E2C]">Gallery</span>
          </h2>
          <p className="text-xl text-[#2E2E2C] max-w-2xl mx-auto">
            Explore our portfolio of stunning transformations and creative styling work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {galleryItems.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square bg-[#DED6CC] border border-[#C6B27C] overflow-hidden transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg"
            >
              <img
                src={item.image}
                alt={item.category}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.style.backgroundColor = '#DED6CC';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-white font-semibold text-xl mb-2">{item.category} Work</h3>
                  <p className="text-gray-200 text-sm">View our {item.category.toLowerCase()} transformations</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="/gallery"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', '/gallery');
              window.dispatchEvent(new PopStateEvent('popstate'));
            }}
            className="inline-block border-2 border-[#2E2E2C] text-[#2E2E2C] px-8 py-3 font-medium hover:bg-[#C6B27C] hover:border-[#C6B27C] transition-all cursor-pointer"
          >
            See More →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
