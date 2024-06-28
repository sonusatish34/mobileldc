import React, { useState, useEffect } from 'react';
import Image from 'next/image';
// import img1 from '../../changeimg/citogfenh.png'
import img2 from '../../changeimg/ertiga.png'
import img3 from '../../changeimg/polo.png'
import img4 from '../../changeimg/swift.png'
import img5 from '../../changeimg/i10.png'
const ImageChange = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
   img2,img3,img4,img5
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); 

    return () => clearInterval(interval);
  }, []); 

  return (
    <div className="image-container mt-12">
      {/* <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} /> */}
        <Image src={images[currentIndex]} alt={`Image ${currentIndex + 1}`}  height={600} width={600}/>
    </div>
  );
};

export default ImageChange;
