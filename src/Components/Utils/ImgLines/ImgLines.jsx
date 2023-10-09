import React from 'react'

const ImgLines = ({list, className}) => {
  return (

              <div className="img-box">
                {list.map((item, key) => {
                  return (
                    <div className={className} key={key}>
                      <img src={item} alt="" />
                    </div>
                  );
                })}
              </div>
  )
}

export default ImgLines