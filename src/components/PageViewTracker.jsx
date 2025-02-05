import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageViewTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag('config', 'AW-353701978', {
        page_path: location.pathname + location.search,
      });
      console.log("Tracking page view:", location.pathname + location.search); // Debugging
    } else {
      console.warn("gtag is not defined");
    }
  }, [location]);

  return null;
};

export default PageViewTracker;
