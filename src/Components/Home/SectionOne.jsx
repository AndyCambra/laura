import React, { forwardRef } from 'react'
import MultiplyObserver from '../Utils/MultiplyObserver'
import Boxes from '../Utils/Boxes'

const SectionOne = forwardRef((props, ref) => {
  return (
    <section className='section-one' ref={ref}>
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
  )
})

export default SectionOne