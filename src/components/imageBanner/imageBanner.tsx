import React from "react";
import IMGTOP from "../../image/Rectangle19.png";
import IMGBOT from "../../image/Rectangle20.png";

const ImageBanner = () => {
  return (
    <div style={{ marginTop: "30px", marginBottom: "30px" }}>
      <div className="image-top">
        <div
          className="image-top-item"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img src={IMGTOP} alt="" width={343} />
          <img className="image-top-item-center" src={IMGTOP} alt="" width={343} />
          <img src={IMGTOP} alt="" width={343} />
        </div>
      </div>
      <div
        className="image-bot"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <img src={IMGBOT} alt="" width={500} />
        <img src={IMGBOT} alt="" width={500} />
      </div>
    </div>
  );
};

export default ImageBanner;
