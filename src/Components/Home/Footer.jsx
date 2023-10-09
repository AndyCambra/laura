import React, {forwardRef} from 'react'

const Footer = forwardRef((props, ref) => {
  return (
    <div className='footer-background' ref={ref}>
        <img src='/img/bubble.png' className='footer-bubble' alt=""></img>
        <p className='mail'>lauracambra@gmail.com</p>
        <p className='sign'>Andy Cambra | andycambra@gmail.com</p>
    </div>
  )
})

export default Footer