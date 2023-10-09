import React, {useState, useRef} from 'react'
import { Link } from 'react-router-dom'
import './home.css'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import Boxes from '../Utils/Boxes'
import Footer from './Footer'
import { MobileOnlyView } from 'react-device-detect';
import HomeMobile from './HomeMobile'


const Home = () => {
    const [isActive, setIsActive]=useState(false)
    const secOneRef= useRef(null)
    const secTwoRef= useRef(null)
    const footerRef= useRef(null)
   
    const handleClick = nextRef => {
        setIsActive(!isActive)
        nextRef?.current?.scrollIntoView({ behavior: "smooth" });
      } 

  return (
    <>
    <div className='background-img'>
        <div className='menu'>
        <Link><h4 className='menu-item' onClick={() => handleClick(secOneRef)} >SOBRE MI</h4></Link>
        <Link><h4 className='menu-item' onClick={() => handleClick(secTwoRef)}>TRABAJOS</h4></Link>
        <Link><h4 className='menu-item' onClick={() => handleClick(footerRef)}>CONTACTO</h4></Link>
        </div>
        <h2 className='home-title'>Laura Cambra Browser</h2>
        <div className='home-text'>
            <p className='text'>Copywriting</p>
            <p className='text'>Ghostwriting</p>
            <p className='text'>UX writing</p>
        </div>
        <Boxes classNameBoxes='boxes' />
    </div>
    <SectionOne ref={secOneRef} />
    <SectionTwo ref={secTwoRef} />
    <Footer ref={footerRef} /> 
    <MobileOnlyView>
     <HomeMobile handleClick={handleClick} secOneRef={secOneRef} secTwoRef={secTwoRef} footerRef={footerRef}/>
    </MobileOnlyView>
    </>
  )
}

export default Home