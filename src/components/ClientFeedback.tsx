import { useEffect } from 'react';

function ClientFeedback() {
  useEffect(() => {
    // Load Elfsight platform script
    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove script on unmount
      const existingScript = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section className="w-full py-28 md:py-36 bg-[#F6F3EE] border-t-4 border-b-4 border-[#264D6C]">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
            Client Feedback
          </h2>
          <div className="w-24 h-1 bg-[#BE9852] mx-auto mt-6"></div>
        </div>
        
        <div className="max-w-7xl mx-auto">
          {/* Elfsight Google Reviews Widget */}
          <div 
            className="elfsight-app-fabd9bd8-59f1-411e-a0a7-0098be50e315" 
            data-elfsight-app-lazy
          />
        </div>
      </div>
    </section>
  );
}

export default ClientFeedback;
