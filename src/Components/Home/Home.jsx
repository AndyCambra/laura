import React, {useState, useRef, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'
import './home.css'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import Boxes from '../Utils/Boxes'
import Footer from './Footer'
import { isMobileOnly} from 'react-device-detect';
import HomeMobile from './HomeMobile'
import Bubbles from '../Utils/images/bubble.png'


const Home = () => {
    const [isActive, setIsActive]=useState(false)
    const secOneRef= useRef(null)
    const secTwoRef= useRef(null)
    const footerRef= useRef(null)
    const location = useLocation();

    const handleClick = nextRef => {
        setIsActive(!isActive)
        nextRef?.current?.scrollIntoView({ behavior: "smooth" });
      } 
      useEffect(() => {
        if (location.hash) {
          const sectionId = location.hash.substring(1);
          const element = document.getElementById(sectionId);
    
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, [location.hash]);
  return (
    <>
    {isMobileOnly ? 
    (  <HomeMobile handleClick={handleClick} secOneRef={secOneRef} secTwoRef={secTwoRef} footerRef={footerRef}/>):
   (<> <div className='background-home'>
      <div className='grid'>
      <img src={Bubbles} alt=" " className='bubble-img' />
        <div className='menu'>
        <Link><h4 className='menu-item' onClick={() => handleClick(secOneRef)}>SOBRE MI</h4></Link>
        <Link><h4 className='menu-item' onClick={() => handleClick(secTwoRef)}>TRABAJOS</h4></Link>
        <Link><h4 className='menu-item' onClick={() => handleClick(footerRef)}>CONTACTO</h4></Link>
        <Link><h4 className='menu-item'>BLOG</h4></Link>
        </div>
       
        <h2 className='home-title'>Laura Cambra</h2>
        <div className='home-text'>
            <p className='text'>Copywriting</p>
            <p className='text'>Ghostwriting</p>
            <p className='text'>UX writing</p>
        </div>
        <Boxes classNameBoxes='boxes' />
        </div>
        
    </div>
    
    <SectionOne ref={secOneRef} />
    <SectionTwo ref={secTwoRef} idXs={"sizes-section-1"} idS={"sizes-section-2"} idM={"sizes-section-3"} idL={"sizes-section-4"} idXl={"sizes-section-5"} />
    <Footer ref={footerRef} /> 
   </>
   )}
 

    </>
  )
}

export default Home