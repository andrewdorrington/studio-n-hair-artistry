'use client';

import { useEffect, useRef } from 'react';

export default function Reviews() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let loaded = false;
    let scriptEl: HTMLScriptElement | null = null;

    const loadScript = () => {
      if (loaded) return;
      loaded = true;
      scriptEl = document.createElement('script');
      scriptEl.src = 'https://featurable.com/assets/bundle.js';
      scriptEl.defer = true;
      scriptEl.charset = 'UTF-8';
      document.body.appendChild(scriptEl);
    };

    if ('IntersectionObserver' in window && containerRef.current) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadScript();
            observer?.disconnect();
          }
        });
      }, { rootMargin: '200px' });
      observer.observe(containerRef.current);
    } else {
      // Fallback: load after window load
      if (document.readyState === 'complete') {
        loadScript();
      } else {
        window.addEventListener('load', loadScript, { once: true });
      }
    }

    return () => {
      observer?.disconnect();
      if (scriptEl && scriptEl.parentNode) {
        scriptEl.parentNode.removeChild(scriptEl);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="featurable-1a83ce3d-e80e-4efb-a366-54d489b04474"
      data-featurable-async
    ></div>
  );
}
