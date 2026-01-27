import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function ClientFeedback() {
  // Placeholder review data - no real content as requested
  const reviews = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    rating: 5,
    name: `Client ${i + 1}`
  }));

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToReview = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="w-full py-20 md:py-24 bg-[#F6F3EE] border-t-4 border-b-4 border-[#264D6C]">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-900">
          Client Feedback
        </h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-[#264D6C] text-white p-3 rounded-full hover:bg-[#1d3d52] transition-all shadow-lg"
            aria-label="Previous review"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-[#264D6C] text-white p-3 rounded-full hover:bg-[#1d3d52] transition-all shadow-lg"
            aria-label="Next review"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="min-w-full flex-shrink-0 px-8 md:px-16"
                >
                  <div className="text-center">
                    <div className="mb-6 text-[#BE9852] text-3xl md:text-4xl">
                      {'★'.repeat(review.rating)}
                    </div>
                    <p className="text-[#333333] mb-6 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                      review
                    </p>
                    <p className="text-[#333333] font-semibold text-base md:text-lg">
                      {review.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-12">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToReview(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-[#264D6C] w-8'
                    : 'bg-[#264D6C]/30 hover:bg-[#264D6C]/50'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientFeedback;
