import React from "react";
import "./Images.css";

export default function Images(props) {
  if (props.images) {
    return (
      <section className="Images">
        {props.images.photos.map(function (image, index) {
          if (index < 9) {
            return (
              <div key={index} className="gallery">
                <a
                  href={image.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Go to image site"
                >
                  <img src={image.src.landscape} alt={image.photographer} />
                </a>
              </div>
            );
          } else {
            return null;
          }
        })}
      </section>
    );
  } else {
    return null;
  }
}
