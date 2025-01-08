import React, { useState, useEffect } from 'react';
import SideNav from './SideNav';
import SideNavMobile from './SideNavMobile';

const ResponsiveNav = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Create a media query for a width less than 360px (mobile)
    const mobileQuery = window.matchMedia('(max-width: 480px)');

    // Set initial state based on the current screen width
    setIsMobile(mobileQuery.matches);

    // Update state when the viewport width changes
    const handleResize = (e) => {
      setIsMobile(e.matches);
    };

    // Listen for changes in screen width
    mobileQuery.addEventListener('change', handleResize);

    // Cleanup listener when the component is unmounted
    return () => {
      mobileQuery.removeEventListener('change', handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile ? <SideNavMobile /> : <SideNav />}
    </div>
  );
};

export default ResponsiveNav;
