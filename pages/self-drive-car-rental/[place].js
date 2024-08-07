import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

// Define a map for dynamic imports, but do not import components here
const componentMap = {
  ameerpet: () => import('../components/Branches/ameerpet'),
  dilshuknagar: () => import('../components/Branches/dilshuknagar'),
  ecil: () => import('../components/Branches/ecil'),
  kukatpally: () => import('../components/Branches/kukatpally'),
  madhapur: () => import('../components/Branches/madhapur'),
  medipally: () => import('../components/Branches/medipally'),
  miyapur: () => import('../components/Branches/miyapur'),
  secunderabad: () => import('../components/Branches/secunderabad'),
  shamshabad: () => import('../components/Branches/shamshabad'),
  ramanthapur: () => import('../components/Branches/ramanthapur'),
  gachibowli: () => import('../components/Branches/gachibowli'),
};

function Place() {
  const [Component, setComponent] = useState(null);
  const router = useRouter();
  const { place } = router.query;

  useEffect(() => {
    if (place) {
      // Only load the component if it is available in the map
      const loadComponent = async () => {
        const componentImport = componentMap[place.toLowerCase()];
        if (componentImport) {
          const { default: Component } = await componentImport();
          setComponent(() => Component);
        } else {
          setComponent(null); // Handle unknown place if needed
        }
      };

      loadComponent();
    }
  }, [place]);

  return (
    <div>
      {Component ? <Component /> : <div>Loading...</div>}
    </div>
  );
}

export default Place;
