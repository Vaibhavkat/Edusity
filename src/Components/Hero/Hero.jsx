import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>
        We are committed to delivering education that shapes a brighter future </h1>
        <p>
        Our innovative curriculum is crafted to equip students with the essential knowledge, skills, and experiences necessary to thrive in the ever-evolving field of education, preparing them for a successful and impactful career.
        </p>
        <button className='btn this'> Explore more <img src={dark_arrow}alt=''/> </button>
      </div>
    </div>
  )
}

export default Hero
