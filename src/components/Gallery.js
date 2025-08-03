import React, { useRef, useEffect, useState } from "react";
import "./Gallery.css";

import gallery1 from "../imagesandassets/gallery1.jpg";
import gallery2 from "../imagesandassets/gallery2.jpg";
import gallery3 from "../imagesandassets/gallery3.jpg";
import gallery4 from "../imagesandassets/gallery4.jpg";
import gallery5 from "../imagesandassets/gallery5.jpg";
import gallery6 from "../imagesandassets/gallery6.jpg";
import gallery7 from "../imagesandassets/gallery7.jpg";
import gallery8 from "../imagesandassets/gallery8.jpg";
import gallery9 from "../imagesandassets/gallery9.jpg";
import gallery10 from "../imagesandassets/gallery10.jpg";
import gallery11 from "../imagesandassets/gallery11.jpg";
import gallery12 from "../imagesandassets/gallery12.jpg";

const images = [
  gallery1, gallery2, gallery3, gallery4,
  gallery5, gallery6, gallery7, gallery8,
  gallery9, gallery10, gallery11, gallery12
];

const Gallery = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationFrame;

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollContainer.scrollLeft += 3;

        // Reset to seamless start
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    scroll();

    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  return (
    <section id="gallery" className="gallery-section">
      <h2>Gallery</h2>
      <div
        className="horizontal-slideshow"
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {[...images, ...images].map((src, i) => (
          <div className="gallery-card" key={i}>
            <img src={src} alt={`Gallery ${i + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
