import React from "react";
import { Row, Col } from "antd";
import Rectangle from "../../image/rectangle1.png";
type Props = {};

const Banner = (props: Props) => {
  return (
    <>
      <div
        className="banner"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <img src={Rectangle} alt="" />
        <img src={Rectangle} alt="" />
        <img src={Rectangle} alt="" />
        <div
          className="box-content"
          style={{ background: "#fff", width: "308px", height: "139px" }}
        >
          <p className="text-p">LOREM IPSUM</p>
          <h2 className="title-banner">Yazın Trendlerini Keşfet</h2>
          <p className="desc-banner">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas interdum a senectus varius elit fringilla eu. Risus dui, odio suspendisse amet id augue duis et donec.</p>
        </div>
      </div>
    </>
  );
};

export default Banner;
