import React from 'react'
import { Link } from 'react-router-dom'
import Boxes from '../Utils/Boxes'
import './homeMobile.css'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import Footer from './Footer'
import Bubbles from '../Utils/images/bubble.png'

const HomeMobile = ({handleClick, secOneRef, secTwoRef, footerRef}) => {
  return (
    <>
    <div className='background-mobile'>
         
        <div className='menu-mobile'>
        <Link><h4 className='menu-item-mobile' onClick={() => handleClick(secOneRef)} >SOBRE MI</h4></Link>
        <Link><h4 className='menu-item-mobile' onClick={() => handleClick(secTwoRef)}>TRABAJOS</h4></Link>
        <Link><h4 className='menu-item-mobile' onClick={() => handleClick(footerRef)}>CONTACTO</h4></Link>
        </div>
        <img src={Bubbles} className='home-bubble' alt=""></img>
      {/*   <h2 className='home-mobile-title'>Laura Cambra</h2> */}
        <Boxes classNameBoxes='boxes-mobile' />
        <div className='home-text-mobile'>
            <p className='text'>Copywriting</p>
            <p className='text'>Ghostwriting</p>
            <p className='text'>UX writing</p>
        </div>
    </div>
    <SectionOne ref={secOneRef} />
    <SectionTwo ref={secTwoRef} />
    <Footer ref={footerRef} />
    </>
  )
}

export default HomeMobile