import React, {useState, useRef} from 'react'
import { Link } from 'react-router-dom'
import './home.css'
import SectionTwo from './SectionTwo'
import Boxes from '../Utils/Boxes'
import MultiplyObserver from '../Utils/MultiplyObserver'
import Footer from './Footer'
import { BrowserView, MobileView, TabletView, MobileOnlyView } from 'react-device-detect';
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
    <section className='section-one' ref={secOneRef}>
        <div className='container-one' >
            <MultiplyObserver className="title-one"/>
            <p className='copy-one'>En diferentes formatos, para diversos soportes y para distintas audiencias.</p>
            <p className='copy-one-bis'>Porque cada forma cumple con un objetivo, cada soporte tiene su lenguaje, cada medio tiene su audiencia. </p>
            <MultiplyObserver className="title-two"/>
            <p className='copy-two'>Porque cada texto me desafía a construír una idea que capture al receptor. </p>
            <MultiplyObserver className="title-three"/>
            <p className='copy-three'>Para otros. Porque me hace feliz acompañarlos en la aventura de transmitir sus ideas, como el sherpa acompaña a los escaladores a conquistar el Everest.  </p>
            <MultiplyObserver className="title-four"/>
            <p className='copy-four'>Porque escribir es siempre tomar de la mano al lector y llevarlo a descubrir nuevos mundos.</p>
        </div>
        <Boxes classNameBoxes='boxes-two' />
    </section>
   <SectionTwo ref={secTwoRef} />
   <Footer ref={footerRef} />
  
   <MobileOnlyView>
    <HomeMobile handleClick={handleClick} secOneRef={secOneRef} secTwoRef={secTwoRef} footerRef={footerRef}/>
   </MobileOnlyView>
  
    </>
  )
}

export default Home