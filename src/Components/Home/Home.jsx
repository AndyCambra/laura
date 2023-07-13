import React, {useState, useRef} from 'react'
import { Link } from 'react-router-dom'
import './home.css'

const Home = () => {
    const [isActive, setIsActive]=useState(false)
    const secOneRef= useRef(null)

    const handleClick = nextRef => {
        setIsActive(!isActive)
        nextRef?.current?.scrollIntoView({ behavior: "smooth" });
      } 
      
  return (
    <>
    <div className='background-img'>
        <div className='menu'>
        <Link><h4 className='menu-item' onClick={() => handleClick(secOneRef)} >SOBRE MI</h4></Link>
        <h4 className='menu-item'>TRABAJOS</h4>
        <h4 className='menu-item'>CONTACTO</h4>
        </div>
        <h2 className='home-title'>Laura Cambra</h2>
        <div className='home-text'>
            <p className='text'>Copywriting</p>
            <p className='text'>Ghostwriting</p>
            <p className='text'>UX writing</p>
        </div>
        <div className='boxes'>  
        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="208" viewBox="0 0 33 208" fill="none">
            <rect x="33" y="208" width="33" height="33" transform="rotate(-180 33 208)" fill="#3D3A34"/>
            <rect x="33" y="164" width="33" height="33" transform="rotate(-180 33 164)" fill="#686257"/>
            <rect x="33" y="120" width="33" height="32" transform="rotate(-180 33 120)" fill="#928B7B"/>
            <rect x="33" y="77" width="33" height="33" transform="rotate(-180 33 77)" fill="#C4B8A0"/>
            <rect x="33" y="33" width="33" height="33" transform="rotate(-180 33 33)" fill="#E7DBC3"/>
        </svg>
        </div>
    </div>
    <section className='section-one' ref={secOneRef}>
        <div className='container-one'>
            <h3 className='title-one'>Escribo.</h3>
            <p className='copy-one'>En diferentes formatos, para diversos soportes y para distintas audiencias.</p>
            <p className='copy-one-bis'>Porque cada forma cumple con un objetivo, cada soporte tiene su lenguaje, cada medio tiene su audiencia. </p>
            <h3 className='title-two'>Escribo.</h3>
            <p className='copy-two'>Porque cada texto me desafía a construír una idea que capture al receptor. </p>
            <h3 className='title-three'>Escribo.</h3>
            <p className='copy-three'>Para otros. Porque me hace feliz acompañarlos en la aventura de transmitir sus ideas, como el sherpa acompaña a los escaladores a conquistar el Everest.  </p>
            <h3 className='title-four'>Escribo.</h3>
            <p className='copy-four'>Porque escribir es siempre tomar de la mano al lector y llevarlo a descubrir nuevos mundos.</p>
        </div>
        <div className='boxes-two'>  
        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="208" viewBox="0 0 33 208" fill="none">
            <rect x="33" y="208" width="33" height="33" transform="rotate(-180 33 208)" fill="#3D3A34"/>
            <rect x="33" y="164" width="33" height="33" transform="rotate(-180 33 164)" fill="#686257"/>
            <rect x="33" y="120" width="33" height="32" transform="rotate(-180 33 120)" fill="#928B7B"/>
            <rect x="33" y="77" width="33" height="33" transform="rotate(-180 33 77)" fill="#C4B8A0"/>
            <rect x="33" y="33" width="33" height="33" transform="rotate(-180 33 33)" fill="#E7DBC3"/>
        </svg>
        </div>

    </section>
    </>
  )
}

export default Home