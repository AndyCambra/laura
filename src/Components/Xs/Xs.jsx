import React from "react";
import "./xs.css";
import Boxes from "../Utils/Boxes";
import InnerHeader from "../Utils/InnerHeader/InnerHeader";
const firstLine = [
  "./img/XS/xs1.png",
  "./img/XS/xs2.png",
  "./img/XS/xs4.png",
  "./img/XS/xs5.png"
];
const secondLine = [
  "./img/XS/xs3.png",
  "./img/XS/xs6.png",
  "./img/XS/xs11.png"
];
const thirdLine = [
  "./img/XS/xs12.png",
  "./img/XS/xs10.png",
  "./img/XS/xs9.png",
  "./img/XS/xs8.png",
  "./img/XS/xs7.png"
];
const Xs = () => {
  return (
    <div className="background">
      <div className="big-box">
        <div className="side-bar">
          <h1 className="size-name">XS</h1>
          <p className="copy">
            Compendiar, organizar y relacionar una gran cantidad de información
            para llegar a la síntesis.<br /> En el camino, el sentido se
            consolida, la palabra se transforma en nombre y el nombre comunica
            identidad.
          </p>
        </div>
        <section className="image-section">
          <InnerHeader />
          <div className="img-container">
            <div>
              <p className="sub-xs">Dherma Science</p>
              <div className="img-box">
                {firstLine.map((item, key) => {
                  return (
                    <div className="single-box" key={key}>
                      <img src={item} alt="" />
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <p className="sub-xs">Biosmotic</p>
              <div className="img-box">
                {secondLine.map((item, key) => {
                  return (
                    <div className="single-box" key={key}>
                      <img src={item} alt="" />
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <p className="sub-xs">Skinbioma</p>
              <div className="img-box">
                {thirdLine.map((item, key) => {
                  return (
                    <div className="single-box" key={key}>
                      <img src={item} alt="" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Boxes classNameBoxes="boxes-in-page" sizeXs="XS" />
    </div>
  );
};

export default Xs;
