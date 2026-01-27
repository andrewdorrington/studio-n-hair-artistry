import { Image } from 'lucide-react';

function GalleryPage() {
  const galleryItems = [
    { id: 1, category: 'Color' },
    { id: 2, category: 'Styling' },
    { id: 3, category: 'Cuts' },
    { id: 4, category: 'Bridal' },
    { id: 5, category: 'Extensions' },
    { id: 6, category: 'Treatments' },
    { id: 7, category: 'Color' },
    { id: 8, category: 'Styling' },
    { id: 9, category: 'Cuts' },
    { id: 10, category: 'Bridal' },
    { id: 11, category: 'Extensions' },
    { id: 12, category: 'Treatments' },
  ];

  return (
    <div className="min-h-screen bg-[#F7F5F2]">
      <section className="py-24 bg-[#F7F5F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#2E2E2C]">
              Our <span className="text-[#2E2E2C]">Gallery</span>
            </h1>
            <p className="text-xl text-[#2E2E2C] max-w-2xl mx-auto">
              Explore our portfolio of stunning transformations and creative styling work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-square bg-[#DED6CC] border border-[#C6B27C] overflow-hidden transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Image className="text-[#2E2E2C] mb-4 group-hover:scale-110 transition-transform" size={48} />
                  <span className="text-[#2E2E2C] text-lg font-medium">{item.category}</span>
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
            <p className="text-[#2E2E2C] mb-6">Follow us on Instagram to see more of our latest work</p>
            <button className="border-2 border-[#2E2E2C] text-[#2E2E2C] px-8 py-3 font-medium hover:bg-[#C6B27C] hover:border-[#C6B27C] transition-all">
              @studionhair
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GalleryPage;
