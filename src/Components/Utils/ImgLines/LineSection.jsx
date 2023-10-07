import React from 'react'
import ImgLines from "../ImgLines/ImgLines";

const LineSection = ({firstLine, secondLine, thirdLine}) => {
  return (
    <div className="img-container">
          <div>
            <ImgLines list={firstLine} />
            <ImgLines list={secondLine} />
            <ImgLines list={thirdLine} />
          </div>
        </div>
  )
}

export default LineSection