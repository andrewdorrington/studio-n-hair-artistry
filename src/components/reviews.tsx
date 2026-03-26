'use client';

import { useEffect } from 'react';

export default function Reviews() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://featurable.com/assets/bundle.js';
    script.defer = true;
    script.charset = 'UTF-8';
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="featurable-1a83ce3d-e80e-4efb-a366-54d489b04474" data-featurable-async></div>
  );
}
