import { useEffect } from 'react';

const FEATURABLE_SCRIPT_SRC = 'https://featurable.com/assets/bundle.js';

export default function ClientFeedback() {
  useEffect(() => {
    const load = () => {
      if (document.querySelector(`script[src="${FEATURABLE_SCRIPT_SRC}"]`)) return;
      const script = document.createElement('script');
      script.src = FEATURABLE_SCRIPT_SRC;
      script.async = true;
      document.body.appendChild(script);
    };

    if (document.readyState === 'complete') {
      if (typeof requestIdleCallback === 'function') {
        requestIdleCallback(load);
      } else {
        setTimeout(load, 0);
      }
    } else {
      const onLoad = () => {
        if (typeof requestIdleCallback === 'function') {
          requestIdleCallback(load);
        } else {
          setTimeout(load, 0);
        }
        window.removeEventListener('load', onLoad);
      };
      window.addEventListener('load', onLoad);
    }
  }, []);

  return (
    <div id="featurable-1a83ce3d-e80e-4efb-a366-54d489b04474" data-featurable-async />
  );
}
