import React, { useState } from "react";
import "./gallery.css";

export default function Gallery({ images }) {
  const [selected, setSelected] = useState(images[0]);

  return (
    <div className="gallery-container">
         <div className="gallery-thumbnails_image"  >
          <div className="gallery-main">
            <img src={selected} alt="selected" />
          </div>
      </div>

      <div className="gallery-thumbnails">
        {images.map((img, idx) => (
      
              <img
                key={idx}
                src={img}
                alt={`thumb-${idx}`}
                className={selected === img ? "active" : ""}
                onClick={() => setSelected(img)}
              />

        ))}
      </div>
    </div>
  );
}
