import { Image } from 'lucide-react';

function Gallery() {
  const galleryItems = [
    { id: 1, category: 'Color' },
    { id: 2, category: 'Styling' },
    { id: 3, category: 'Cuts' },
    { id: 4, category: 'Bridal' },
    { id: 5, category: 'Extensions' },
    { id: 6, category: 'Treatments' },
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Our <span className="text-[#333333]">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of stunning transformations and creative styling work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {galleryItems.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 overflow-hidden hover:border-gray-400 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <Image className="text-[#333333] mb-4 group-hover:scale-110 transition-transform" size={48} />
                <span className="text-gray-700 text-lg font-medium">{item.category}</span>
              </div>
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
            className="inline-block border-2 border-[#333333] text-[#333333] px-8 py-3 font-semibold hover:bg-[#333333] hover:text-white transition-all cursor-pointer"
          >
            See More →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
