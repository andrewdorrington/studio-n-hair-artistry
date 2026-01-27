function ClientFeedback() {
  // Placeholder review data - no real content as requested
  const reviews = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    rating: 5,
    name: `Client ${i + 1}`
  }));

  return (
    <section className="w-full py-16 bg-[#264D6C]">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
          CLIENT FEEDBACK
        </h2>
        
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6 min-w-max px-4 md:px-8">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="flex-shrink-0 w-72 md:w-80 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="mb-4 text-yellow-300 text-xl md:text-2xl">
                  {'★'.repeat(review.rating)}
                </div>
                <p className="text-white mb-4 text-base md:text-lg leading-relaxed">
                  review
                </p>
                <p className="text-white/80 font-semibold text-sm md:text-base">
                  {review.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientFeedback;
