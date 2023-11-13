import React, {forwardRef} from 'react'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { isMobileOnly} from 'react-device-detect';

const Footer = forwardRef((props, ref) => {
  return (
    <>
    {isMobileOnly ? (
    <>
      <div className='footer-background' ref={ref}>
        <div>
          <img src='/img/globo-celeste.png' className='footer-bubble' alt=""></img>
          <div>
          <p className='mail'>lauracambra@gmail.com</p>
          <div className='social-box'>
          <Link className='social-link' to="https://www.linkedin.com/in/lauracambra/" target="_blank" rel="noreferrer"> <Icon className='icon' icon="basil:linkedin-outline" /></Link>
         <Link className='social-link' to="https://twitter.com/lauracambra" target="_blank" rel="noreferrer"> <Icon className='icon' icon="line-md:twitter-x" /></Link>
         </div>
         </div>
         </div>
      </div>
      <p className='sign'>Andy Cambra | andycambra@gmail.com</p>
      </>
      ):(
      <>
    <div className='footer-background' ref={ref}>
      <div>
        <img src='/img/globo-celeste.png' className='footer-bubble' alt=""></img>
        <p className='mail'>lauracambra@gmail.com</p>
       
        </div>
        <div className='icon-box'>
       <Link className='social-link' to="https://www.linkedin.com/in/lauracambra/" target="_blank" rel="noreferrer"> <Icon className='icon' icon="basil:linkedin-outline" /></Link>
       <Link className='social-link' to="https://twitter.com/lauracambra" target="_blank" rel="noreferrer"> <Icon className='icon' icon="line-md:twitter-x" /></Link>
        </div>
        
    </div>
    <p className='sign'>Andy Cambra | andycambra@gmail.com</p>
    </>
    )
      }
  
  </>
)})

export default Footer

