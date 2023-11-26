import React, {useEffect} from "react";
import './sizesdetail.css'
import Boxes from "../Utils/Boxes";
import InnerHeader from "../Utils/InnerHeader/InnerHeader";

import sizesPageTexts from '../Utils/Texts/sizesPageTexts.json'
import LineSection from "../Utils/ImgLines/LineSection";
import { useParams, Link } from 'react-router-dom'
import Footer from "../Home/Footer";
import { isMobileOnly} from 'react-device-detect';

const SizesDetail = () => {
  const {id} = useParams()
  const text=sizesPageTexts
  const selectedSize = text.sizes.find(p=> p.id=== parseInt(id))
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
     {isMobileOnly ? (
      <div className= "long-background-mobile">
      <div className="mobile-sizes-box">
      <InnerHeader size={selectedSize.size}/>
        <div className="mobile-side-bar">
          <h1 className="size-name">{selectedSize.size}</h1>
          <p className="mobile-copy" dangerouslySetInnerHTML={{ __html: selectedSize.copy }}></p>
          
      </div>
      <section className="mobile-image-section">
        
        <LineSection firstLine={selectedSize.firstLine} secondLine={selectedSize.secondLine} thirdLine={selectedSize.thirdLine} forthLine={selectedSize.forthLine} fifthLine={selectedSize.fifthLine} sixthLine={selectedSize.sixthLine}
        classNameBox="mobile-img-box"
        className1={(selectedSize.id === 1 && "single-box-mobile") || (selectedSize.id === 2 && "single-box-small-m")  || ( selectedSize.id === 5 && "single-box-large-m") || ( selectedSize.id === 4 && "single-box-large-m")} 
        className2={(selectedSize.id === 1 && "single-box-mobile") || (selectedSize.id === 2 && "single-box-small-m") || ( selectedSize.id === 3 && "single-box-m") || ( selectedSize.id === 5 && "single-box-large-m") || ( selectedSize.id === 4 && "single-box-large-m")} 
        className3={(selectedSize.id === 1 && "single-box-mobile") || (selectedSize.id === 2 && "single-box-small-m") || ( selectedSize.id === 3 && "single-box-large-m") || ( selectedSize.id === 4 && "single-box-large-m") || ( selectedSize.id === 5 && "single-box-large-m")}
        className4={(selectedSize.id === 2 && "single-box-small-m-4") || ( selectedSize.id === 3 && "single-box-large-m")  || ( selectedSize.id === 4 && "single-box-large-m-4")}
        className5="single-box-large-m" 
        className6="single-box-last-m" />
      </section>
      <Link to={`/#sizes-section-${selectedSize.id}`} className="mobile-back">VOLVER</Link>
    </div>
    </div>
     ):(
    <div className="background">
      <div className="big-box-sizes">
        <div className="side-bar">
          <h1 className="size-name">{selectedSize.size}</h1>
          <p className="copy" dangerouslySetInnerHTML={{ __html: selectedSize.copy }}></p>
          <Link to={`/#sizes-section-${selectedSize.id}`} className="volver">VOLVER</Link>
      </div>
      <section className="image-section">
        <InnerHeader size={selectedSize.size}/>
        <LineSection firstLine={selectedSize.firstLine} secondLine={selectedSize.secondLine} thirdLine={selectedSize.thirdLine} forthLine={selectedSize.forthLine} fifthLine={selectedSize.fifthLine} sixthLine={selectedSize.sixthLine}
        classNameBox="img-box"
        className1={(selectedSize.id === 1 && "single-box") || (selectedSize.id === 2 && "single-box-small") || ( selectedSize.id === 3 && "single-box-m-med")  || ( selectedSize.id === 5 && "single-box-large")} 
        className2={(selectedSize.id === 1 && "single-box") || (selectedSize.id === 2 && "single-box-small") || ( selectedSize.id === 3 && "single-box-m") || ( selectedSize.id === 5 && "single-box-large")} 
        className3={(selectedSize.id === 1 && "single-box") || (selectedSize.id === 2 && "single-box-small") || ( selectedSize.id === 3 && "single-box-m-tall") || ( selectedSize.id === 4 && "single-box-large-wide") || ( selectedSize.id === 5 && "single-box-large")}
        className4={(selectedSize.id === 2 && "single-box-small") || ( selectedSize.id === 3 && "single-box-m-tall")  || ( selectedSize.id === 4 && "single-box-large-wide") || ( selectedSize.id === 5 && "single-box-large")}
        className5="single-box-m-tall" 
        className6="single-box-m-med"/>
         <Boxes classNameBoxes="boxes-in-page" 
      sizeXs={selectedSize.id === 1 && selectedSize.size} 
      sizeS={selectedSize.id === 2 && selectedSize.size}
      sizeM={selectedSize.id === 3 && selectedSize.size} 
      sizeL={selectedSize.id === 4 && selectedSize.size} 
      sizeXl={selectedSize.id === 5 && selectedSize.size}/>
      </section>
    </div>
    </div>)}
    <Footer /> 
    </>
  );
};

export default SizesDetail;
