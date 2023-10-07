import React from "react";
import './sizesdetail.css'
import Boxes from "./Utils/Boxes";
import InnerHeader from "./Utils/InnerHeader/InnerHeader";
import sizesPageTexts from './Utils/Texts/sizesPageTexts.json'
import LineSection from "./Utils/ImgLines/LineSection";
import { useParams } from 'react-router-dom'

const SizesDetail = () => {
  const {id} = useParams()
  const text=sizesPageTexts
  const selectedSize = text.sizes.find(p=> p.id=== parseInt(id))
  console.log(selectedSize.id, id, selectedSize.size)
  return (
    <>
    <div className="background">
      <div className="big-box">
        <div className="side-bar">
          <h1 className="size-name">{selectedSize.size}</h1>
          <p className="copy" dangerouslySetInnerHTML={{ __html: selectedSize.copy }}></p>
      </div>
      <section className="image-section">
        <InnerHeader size={selectedSize.size}/>
        <LineSection firstLine={selectedSize.firstLine} secondLine={selectedSize.secondLine} thirdLine={selectedSize.thirdLine} />
      </section>
    </div>
      <Boxes classNameBoxes="boxes-in-page" sizeXs={selectedSize.id === 1 && selectedSize.size} sizeS={selectedSize.id === 2 && selectedSize.size} sizeM={selectedSize.id === 3 && selectedSize.size} sizeL={selectedSize.id === 4 && selectedSize.size} sizeXL={selectedSize.id === 5 && selectedSize.size}/>
    </div>
    </>
  );
};

export default SizesDetail;
