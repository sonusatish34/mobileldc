import React from 'react'
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

function Place() {
  const Gachibowli = dynamic(() => import('../self-drive-car-rental/Branches/gachibowli'));
  const Ameerpet = dynamic(() => import('../self-drive-car-rental/Branches/ameerpet'));
  const Dilshuknagar = dynamic(() => import('../self-drive-car-rental/Branches/dilshuknagar'));
  const Ecil = dynamic(() => import('../self-drive-car-rental/Branches/ecil'));
  const Kukatpally = dynamic(() => import('../self-drive-car-rental/Branches/kukatpally'));
  const Madhapur = dynamic(() => import('../self-drive-car-rental/Branches/madhapur'));
  const Medipally = dynamic(() => import('../self-drive-car-rental/Branches/medipally'));
  const Miypaur = dynamic(() => import('../self-drive-car-rental/Branches/miyapur'));
  const Secunderabad = dynamic(() => import('../self-drive-car-rental/Branches/secunderabad'));
  const Shamshabad = dynamic(() => import('../self-drive-car-rental/Branches/shamshabad'));
  const Ramanthapur = dynamic(() => import('../self-drive-car-rental/Branches/ramanthapur'));

  const router = useRouter();
  const { place } = router.query;
  console.log(place, "pp");
  return (
    <div className=''>
    {/* {(place === "gachibowli") : <Gachibowli />? <div>NOne</div>}  */}
    {(place === "gachibowli") ? <Gachibowli /> : null}
    {(place === "dilshuknagar") ? <Dilshuknagar /> : null}
    {(place === "ecil") ? <Ecil /> : null}
    {(place === "kukatpally") ? <Kukatpally /> : null}
    {(place === "madhapur") ? <Madhapur /> : null}
    {(place === "medipally") ? <Medipally /> : null}
    {(place === "miyapur") ? <Miypaur /> : null}
    {(place === "secunderabad") ? <Secunderabad /> : null}
    {(place === "shamshabad") ? <Shamshabad /> : null}
    {(place === "ramanthapur") ? <Ramanthapur /> : null}
    {(place === "ameerpet") ? <Ameerpet /> : null}
    </div>
  )
}

export default Place;