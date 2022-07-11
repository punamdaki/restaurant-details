import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "images/download_1.jpg" },
  { url: "images/download_2.jpg" },
  { url: "images/download_3.jpg" },
  { url: "images/download_4.jpg" },
  { url: "images/5.jpg" },
  { url: "images/6.jpg" },
  { url: "images/7.jpg" },
];

const Home = () => {
  return (
    <div>
      <SimpleImageSlider
	    
        width={1400}
        height={600}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>

	
  );
}

export default Home;
