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
    <section className="w-full py-28 md:py-36 bg-[#F6F3EE] border-t-4 border-b-4 border-[#264D6C]">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
            Client Feedback
          </h2>
          <div className="w-24 h-1 bg-[#BE9852] mx-auto mt-6"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 md:-translate-x-16 z-10 bg-[#264D6C] text-white p-4 md:p-5 rounded-full hover:bg-[#1d3d52] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-110 group"
            aria-label="Previous review"
          >
            <ChevronLeft size={28} className="group-hover:-translate-x-1 transition-transform" />
          </button>

          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 md:translate-x-16 z-10 bg-[#264D6C] text-white p-4 md:p-5 rounded-full hover:bg-[#1d3d52] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-110 group"
            aria-label="Next review"
          >
            <ChevronRight size={28} className="group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="min-w-full flex-shrink-0 px-8 md:px-20 lg:px-24"
                >
                  <div className="text-center">
                    {/* Decorative Quote Mark */}
                    <div className="mb-8">
                      <svg 
                        className="w-16 h-16 md:w-20 md:h-20 mx-auto text-[#BE9852]/20" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                      </svg>
                    </div>

                    {/* Star Rating */}
                    <div className="mb-8 text-[#BE9852] text-4xl md:text-5xl tracking-wider">
                      {'★'.repeat(review.rating)}
                    </div>

                    {/* Review Text */}
                    <p className="text-[#333333] mb-10 text-xl md:text-2xl lg:text-3xl leading-relaxed max-w-3xl mx-auto font-light italic">
                      review
                    </p>

                    {/* Client Name */}
                    <div className="pt-6 border-t border-[#264D6C]/20">
                      <p className="text-[#333333] font-semibold text-lg md:text-xl tracking-wide">
                        {review.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center items-center gap-3 mt-16 md:mt-20">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToReview(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-[#264D6C] w-10 h-3 shadow-md'
                    : 'bg-[#264D6C]/25 hover:bg-[#264D6C]/40 w-3 h-3'
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
