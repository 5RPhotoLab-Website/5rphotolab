import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageViewTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Sends a pageview event to Google Analytics when the route changes
    window.gtag('config', 'AW-353701978', {
      page_path: location.pathname + location.search,
    });
  }, [location]);

  return null;
};

export default PageViewTracker;
