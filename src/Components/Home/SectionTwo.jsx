import React, { forwardRef } from "react";
import Boxes from "../Utils/Boxes";
import { isMobileOnly } from "react-device-detect";
import { Link } from "react-router-dom";


const SectionTwo = forwardRef(({idXs, idS, idM, idL, idXl}, ref) => {
  return (
    <section className="section-two" ref={ref}>
        <div className="over-img">
      <div className="box" id={idXs}>
        <div className="xs">
          <p className="size-text" dangerouslySetInnerHTML={{ __html: "El nombre de un producto. <br>La línea de llegada de un proceso<br> que define un concepto y una identidad." }}></p>
          <Link to='/sizes/1'><p className="see-more">ver más...</p></Link>
        </div>
        {isMobileOnly ? null : <Boxes classNameBoxes="boxes-xs" sizeXs="XS" />}
      </div>
      <div className="box" id={idS}>
        <div className="sm" id="sizes-section-2">
          <p className="size-text"  dangerouslySetInnerHTML={{ __html: "Un tilular. Un copy. <br>Un post en redes.<br> Impacto. Potencia. Recordación." }}></p>
          <Link to='/sizes/2'><p className="see-more">ver más...</p></Link>
        </div>
        {isMobileOnly ? null : <Boxes classNameBoxes="boxes-sm" sizeS="S" />}
      </div>
      <div className="box" id={idM}>
        <div className="md" id="sizes-section-3">
          <p className="size-text" dangerouslySetInnerHTML={{ __html: "El guión de un comercial de radio o TV. <br>Allí donde la letra se hace voz <br> y las palabras se ponen en movimiento." }}></p>
          <Link to='/sizes/3'><p className="see-more">ver más...</p></Link>
        </div>
        {isMobileOnly ? null : <Boxes classNameBoxes="boxes-md" sizeM="M" />}
      </div>
      <div className="box" id={idL}>
        <div className="lg" id="sizes-section-4">
          <p className="size-text" dangerouslySetInnerHTML={{ __html: "Una columna editorial o un manual de marca.<br> Ideas que se ordenan para sostener <br>  un argumento o para definir una normativa." }}></p>
         <Link to='/sizes/4'><p className="see-more">ver más...</p></Link>
        </div>
        {isMobileOnly ? null : <Boxes classNameBoxes="boxes-lg" sizeL="L" />}
      </div>
      <div className="box" id={idXl}>
        <div className="xl" id="sizes-section-5">
          <p className="size-text"dangerouslySetInnerHTML={{ __html: "Un libro. El despliegue de una pasión,<br>de una experiencia singular<br>o de saberes únicos. " }}></p>
          <Link to='/sizes/5'><p className="see-more">ver más...</p></Link>
        </div>
        {isMobileOnly ? null : <Boxes classNameBoxes="boxes-xl" sizeXl="XL" />}
      </div>
      </div>
      <img src='/img/Sizes.png' alt="" />
    </section>
  );
});

export default SectionTwo;