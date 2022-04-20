import React from "react";

import { ImageCardDetail } from "../image-card-detail/image-card-detail.component";
import "./image-card.styles.scss";

export const ImageCard = ({ photo }) => {
  const { altDescription, urls, links, exif } = photo;
  return (
    <div className="image-card">
      <a
        href={links.html}
        className="unsplash-link"
        target="_blank"
        alt="go to unsplash.com"
        rel="noreferrer"
      >
        <div className="image-wrapper">
          <img className="image" src={urls.regular} alt={altDescription} />
        </div>
        <ImageCardDetail exif={exif} />
      </a>
    </div>
  );
};
