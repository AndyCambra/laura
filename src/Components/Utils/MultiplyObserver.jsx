import React from 'react'
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web'

const MultiplyObserver= ({className}) => {
    const { ref, inView } = useInView()
    const {opacity} = useSpring({config: { tension: 30, friction: 50 },
        from: { opacity: 0 },
        to: {
          opacity: inView ? 1 : 0
        }});

  

    return(
        <>
        <animated.h3 ref={ref} className={className}style={{opacity}}>Escribo.</animated.h3>
        </>
    )
}

export default MultiplyObserver