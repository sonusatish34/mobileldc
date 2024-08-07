import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

// Import all components dynamically
const components = {
  ameerpet: dynamic(() => import('../components/Branches/ameerpet'), { ssr: false }),
  dilshuknagar: dynamic(() => import('../components/Branches/dilshuknagar')),
  ecil: dynamic(() => import('../components/Branches/ecil')),
  kukatpally: dynamic(() => import('../components/Branches/kukatpally')),
  madhapur: dynamic(() => import('../components/Branches/madhapur')),
  medipally: dynamic(() => import('../components/Branches/medipally')),
  miyapur: dynamic(() => import('../components/Branches/miyapur')),
  secunderabad: dynamic(() => import('../components/Branches/secunderabad')),
  shamshabad: dynamic(() => import('../components/Branches/shamshabad')),
  ramanthapur: dynamic(() => import('../components/Branches/ramanthapur')),
  gachibowli: dynamic(() => import('../components/Branches/gachibowli')),
};

function Place() {
  const [Component, setComponent] = useState(null);
  const router = useRouter();
  const { place } = router.query;

  useEffect(() => {
    if (place) {
      // Load the component based on the 'place' query parameter
      const component = components[place.toLowerCase()];
      if (component) {
        setComponent(component);
      } else {
        setComponent(null); // Fallback or empty state
      }
    }
  }, [place]);

  return (
    <div>
      {Component ? <Component /> : <div>Loading...</div>}
    </div>
  );
}

export default Place;
