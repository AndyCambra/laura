import React from 'react'

const ImgLines = ({list}) => {
  return (

              <div className="img-box-small">
                {list.map((item, key) => {
                  return (
                    <div className="single-box-small" key={key}>
                      <img src={item} alt="" />
                    </div>
                  );
                })}
              </div>
  )
}

export default ImgLines