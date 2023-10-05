import React from "react";
import "../Xs/xs.css";
import Boxes from "../Utils/Boxes";
import InnerHeader from "../Utils/InnerHeader/InnerHeader";
const firstLine = [
  "./img/Small/Small1.png",
  "./img/Small/Small2.png",
  "./img/Small/Small3.png"
];
const secondLine = [
  "./img/Small/Small4.png",
  "./img/Small/Small5.png",
  "./img/Small/Small6.png",
  "./img/Small/Small7.png"
];
const thirdLine = [
  "./img/Small/Small8.png",
  "./img/Small/Small9.png",
  "./img/Small/Small10.png"
];
const Small = () => {
  return (
    <div className="background">
      <div className="big-box">
        <div className="side-bar">
          <h1 className="size-name">S</h1>
          <p className="copy">
            Foco, emoción, precisión y fuerza: <br></br>la comunicación asertiva que se
            destaca en un mundo sobreestimulado.
          </p>
        </div>
        <section className="image-section">
          <InnerHeader />
          <div className="img-container">
            <div>
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
      <Boxes classNameBoxes="boxes-in-page" sizeS="S" />
    </div>
  );
};

export default Small;
