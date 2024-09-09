import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Mehdipatnam from '../components/Branches/mehdipatnam';
import mehdipatnam from '../components/Branches/mehdipatnam';
import khajaguda from '../components/Branches/khajaguda';
import nanakramguda from '../components/Branches/nanakramguda';
import hitech from '../components/Branches/hitech';
import lbnagar from '../components/Branches/lbnagar';

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
  patancheru: dynamic(() => import('../components/Branches/patancheru')),
  mehdipatnam: dynamic(() => import('../components/Branches/mehdipatnam')),
  hitech: dynamic(() => import('../components/Branches/hitech')),
  khajaguda: dynamic(() => import('../components/Branches/khajaguda')),
  lbnagar:dynamic(()=>import('../components/Branches/lbnagar')),
 nanakramguda: dynamic(() => import('../components/Branches/nanakramguda')),



};

function Place() {
  const [Component, setComponent] = useState(null);
  const router = useRouter();
  const { place } = router.query;

  useEffect(() => {
    if (place) {
      const component = components[place.toLowerCase()];
      if (component) {
        setComponent(component);
      } else {
        setComponent(null);
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
