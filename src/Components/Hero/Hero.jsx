import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png' 
const Hero = () => {
  return (
    <div className='hero container' id='hero'>
      <div className='hero-text'>
        <h1 > We Ensure better education for a better world </h1>
<p> Our cuting-edge curriculum is designed to empower students with the knowledge, skills, 
    and experiences needed to execel in the dynamic field of education</p>
     <button className='btn'> Explore More <img src={dark_arrow}/></button> </div>
    </div>
  )
}

export default Hero
