import React from 'react'
import { Link } from 'react-router-dom'
import Boxes from '../Utils/Boxes'
import './homeMobile.css'
import MultiplyObserver from '../Utils/MultiplyObserver'
import SectionTwo from './SectionTwo'
import Footer from './Footer'

const HomeMobile = ({handleClick, secOneRef, secTwoRef, footerRef}) => {
  return (
    <>
    <div className='background-mobile'>
         
        <div className='menu-mobile'>
        <Link><h4 className='menu-item-mobile' onClick={() => handleClick(secOneRef)} >SOBRE MI</h4></Link>
        <Link><h4 className='menu-item-mobile' onClick={() => handleClick(secTwoRef)}>TRABAJOS</h4></Link>
        <Link><h4 className='menu-item-mobile' onClick={() => handleClick(footerRef)}>CONTACTO</h4></Link>
        </div>
        <img src='./img/bubble.png' className='home-bubble' alt=""></img>
        <h2 className='home-mobile-title'>Laura Cambra</h2>
        <Boxes classNameBoxes='boxes-mobile' />
        <div className='home-text-mobile'>
            <p className='text'>Copywriting</p>
            <p className='text'>Ghostwriting</p>
            <p className='text'>UX writing</p>
        </div>
    </div>
    <section className='section-one-mobile' ref={secOneRef}>
        <div className='container-one-mobile' >
            <MultiplyObserver className="title-one-mobile"/>
            <p className='copy-one-mobile'>En diferentes formatos, para diversos soportes y para distintas audiencias. Porque cada forma cumple con un objetivo, cada soporte tiene su lenguaje, cada medio tiene su audiencia.</p>
            <MultiplyObserver className="title-two-mobile"/>
            <p className='copy-one-mobile'>Porque cada texto me desafía a construír una idea que capture al receptor. </p>
            <MultiplyObserver className="title-three-mobile"/>
            <p className='copy-one-mobile'>Para otros. Porque me hace feliz acompañarlos en la aventura de transmitir sus ideas, como el sherpa acompaña a los escaladores a conquistar el Everest.  </p>
            <MultiplyObserver className="title-four-mobile"/>
            <p className='copy-one-mobile'>Porque escribir es siempre tomar de la mano al lector y llevarlo a descubrir nuevos mundos.</p>
        </div>
        <Boxes classNameBoxes='boxes-two-mobile' />
        
    </section>
    <SectionTwo ref={secTwoRef} />
    <Footer ref={footerRef} />
    </>
  )
}

export default HomeMobile