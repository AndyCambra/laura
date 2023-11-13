import React from 'react'
import ImgLines from "../ImgLines/ImgLines";

const LineSection = ({firstLine, secondLine, thirdLine, forthLine, className1, className2, className3, className4, fifthLine, sixthLine, className5, className6, classNameBox}) => {
  return (
    <div className="img-container">
          <div>
            <ImgLines list={firstLine} className={className1} classNameBox={classNameBox}/>
            <ImgLines list={secondLine} className={className2} classNameBox={classNameBox}/>
            <ImgLines list={thirdLine} className={className3} classNameBox={classNameBox}/>
            {forthLine !== undefined && <ImgLines list={forthLine} className={className4} classNameBox={classNameBox}/>}
            {fifthLine !== undefined && <ImgLines list={fifthLine} className={className5} classNameBox={classNameBox}/>}
            {sixthLine !== undefined && <ImgLines list={sixthLine} className={className6} classNameBox={classNameBox}/>}
          </div>
        </div>
  )
}

export default LineSection