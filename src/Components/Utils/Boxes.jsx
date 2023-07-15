import React from 'react'

const Boxes = ({classNameBoxes, sizeXs, sizeS, sizeM, sizeL, sizeXl}) => {
  return (
    <div className={classNameBoxes}>  
    <div className='square square-color-one'>{sizeXs}</div>
    <div className='square square-color-two'>{sizeS}</div>
    <div className='square square-color-three'>{sizeM}</div>
    <div className='square square-color-four'>{sizeL}</div>
    <div className='square square-color-five'>{sizeXl}</div>
    </div>
  )
}

export default Boxes