import React, {useEffect} from "react";
import './sizesdetail.css'
import Boxes from "../Utils/Boxes";
import InnerHeader from "../Utils/InnerHeader/InnerHeader";
import sizesPageTexts from '../Utils/Texts/sizesPageTexts.json'
import LineSection from "../Utils/ImgLines/LineSection";
import { useParams, Link } from 'react-router-dom'
import Footer from "../Home/Footer";

const SizesDetail = () => {
  const {id} = useParams()
  const text=sizesPageTexts
  const selectedSize = text.sizes.find(p=> p.id=== parseInt(id))
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
    <div className={selectedSize.id === 1 || selectedSize.id === 2 || selectedSize.id === 5 ? "background" : "long-background"}>
    <Boxes classNameBoxes="boxes-in-page" 
      sizeXs={selectedSize.id === 1 && selectedSize.size} 
      sizeS={selectedSize.id === 2 && selectedSize.size}
      sizeM={selectedSize.id === 3 && selectedSize.size} 
      sizeL={selectedSize.id === 4 && selectedSize.size} 
      sizeXl={selectedSize.id === 5 && selectedSize.size}/>
      <div className="big-box-sizes">
        <div className="side-bar">
          <h1 className="size-name">{selectedSize.size}</h1>
          <p className="copy" dangerouslySetInnerHTML={{ __html: selectedSize.copy }}></p>
          <Link to={`/#sizes-section-${selectedSize.id}`} className="volver">VOLVER</Link>
      </div>
      <section className="image-section">
        <InnerHeader size={selectedSize.size}/>
        <LineSection firstLine={selectedSize.firstLine} secondLine={selectedSize.secondLine} thirdLine={selectedSize.thirdLine} forthLine={selectedSize.forthLine} fifthLine={selectedSize.fifthLine} sixthLine={selectedSize.sixthLine}
        className1={(selectedSize.id === 1 && "single-box") || (selectedSize.id === 2 && "single-box-small") || ( selectedSize.id === 3 && "single-box-m")  || ( selectedSize.id === 5 && "single-box-large")} 
        className2={(selectedSize.id === 1 && "single-box") || (selectedSize.id === 2 && "single-box-small") || ( selectedSize.id === 3 && "single-box-m") || ( selectedSize.id === 5 && "single-box-large")} 
        className3={(selectedSize.id === 1 && "single-box") || (selectedSize.id === 2 && "single-box-small") || ( selectedSize.id === 3 && "single-box-m-tall") || ( selectedSize.id === 4 && "single-box-large-wide") || ( selectedSize.id === 5 && "single-box-large")}
        className4={(selectedSize.id === 2 && "single-box-small") || ( selectedSize.id === 3 && "single-box-m-tall")  || ( selectedSize.id === 4 && "single-box-large-wide")}
        className5="single-box-m-tall" className6={"single-box-m-tall"}/>
      </section>
    </div>
    </div>
    <Footer /> 
    </>
  );
};

export default SizesDetail;
