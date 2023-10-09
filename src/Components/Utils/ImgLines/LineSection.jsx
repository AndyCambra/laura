import React from 'react'
import ImgLines from "../ImgLines/ImgLines";

const LineSection = ({firstLine, secondLine, thirdLine, forthLine, className1, className2, className3, className4, fifthLine, sixthLine, className5, className6}) => {
  return (
    <div className="img-container">
          <div>
            <ImgLines list={firstLine} className={className1}/>
            <ImgLines list={secondLine} className={className2} />
            <ImgLines list={thirdLine} className={className3}/>
            {forthLine !== undefined && <ImgLines list={forthLine} className={className4}/>}
            {fifthLine !== undefined && <ImgLines list={fifthLine} className={className5}/>}
            {sixthLine !== undefined && <ImgLines list={sixthLine} className={className6}/>}
          </div>
        </div>
  )
}

export default LineSection