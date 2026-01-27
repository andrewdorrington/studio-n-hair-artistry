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
    <section className="w-full py-16 md:py-20 bg-[#F7F5F2]">
      <div className="w-full">
        {/* Elfsight Google Reviews Widget */}
        <div 
          className="elfsight-app-fabd9bd8-59f1-411e-a0a7-0098be50e315 w-full" 
          data-elfsight-app-lazy
          style={{ minHeight: '600px' }}
        />
      </div>
    </section>
  );
}

export default ClientFeedback;
