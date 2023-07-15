import React, {forwardRef}  from 'react'
import Boxes from '../Utils/Boxes'

const SectionTwo =forwardRef((props, ref)=> {


  return (
    <section className='section-two' ref={ref}>
        <div className='big-box'>
            <div className='xs'>
            <p className='size-text'>El nombre de un producto.</p>
            <p className='size-text'>La línea de llegada de un proceso</p>
            <p className='size-text'>que define un concepto y una identidad.</p>
            <p className='see-more'>ver más...</p>
            </div>
            <Boxes classNameBoxes="boxes-xs" sizeXs="XS"/>
        </div>
        <div className='big-box'>
            <div className='sm'>
            <p className='size-text'>Un titular. Un copy.</p>
            <p className='size-text'>Un post en redes.</p>
            <p className='size-text'>Impacto. Potencia. Recordación.</p>
            <p className='see-more'>ver más...</p>
            </div>
            <Boxes classNameBoxes="boxes-sm" sizeS="S"/>
        </div>
        <div className='big-box'>
        <div className='md'>
            <p className='size-text'>El guión de un comercial de radio o TV. </p>
            <p className='size-text'>Allí donde la letra se hace voz</p>
            <p className='size-text'>y las palabras se ponen en movimiento. </p>
            <p className='see-more'>ver más...</p>
            </div>
            <Boxes classNameBoxes="boxes-md" sizeM="M"/>
        </div>
        <div className='big-box'>
        <div className='lg'>
            <p className='size-text'>Una columna editorial o un manual de marca.  </p>
            <p className='size-text'>Ideas que se ordenan para sostener </p>
            <p className='size-text'>un argumento o para definir una normativa.</p>
            <p className='see-more'>ver más...</p>
            </div>
            <Boxes classNameBoxes="boxes-lg" sizeL="L"/>
        </div>
        <div className='big-box'>
        <div className='xl'>
            <p className='size-text'>Un libro. El despliegue de una pasión,</p>
            <p className='size-text'>de una experiencia singular </p>
            <p className='size-text'>o de saberes únicos.</p>
            <p className='see-more'>ver más...</p>
            </div>
            <Boxes classNameBoxes="boxes-xl" sizeXl="XL"/>
        </div>
    </section>
  )
})

 
 

export default SectionTwo