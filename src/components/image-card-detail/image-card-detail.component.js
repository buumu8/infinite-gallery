import React from "react";

import "./image-card-detail.styles.scss";

export const ImageCardDetail = ({ exif }) => {
  return (
    <div className="image-details">
      <div className="make">
        <span className="header">Make: </span>
        <span>{exif.make ?? "-"}</span>
      </div>
      <div className="model">
        <span className="header">Model: </span>
        <span>{exif.model ?? "-"}</span>
      </div>
      <div className="exposure">
        <span className="header">Exposure: </span>
        <span>{exif.exposureTime ?? "-"}</span>
      </div>
      <div className="focalLength">
        <span className="header">Focal Length: </span>
        <span className="focalLength">{exif.focalLength ?? "-"}</span>
      </div>
      <div className="aperture">
        <span className="header">Aperture: </span>
        <span>{exif.aperture ?? "-"}</span>
      </div>
    </div>
  );
};
