import React from 'react'
import Button from '../Button/Button'


/**
 * @function Data
 * @description A React component that renders the hero section data for a portfolio.
 * @returns {JSX.Element} A div containing the title, subtitle, description, and a Button component.
 */
const Data = () => {
  return (
    <div className="home__data">
        <h1 className="home__title">Franklin</h1>
        <h3 className='home__subtitle'>Full Stack Developer</h3>
        <p className="home__description">
          👋 Hello! I'm Anyanwu Franklin, a passionate Full Stack Developer crafting elegant digital experiences. 
          I specialize in building responsive, user-centric web applications using modern technologies. 
          With a keen eye for detail and a commitment to clean code, I transform complex problems into simple, 
          beautiful, and intuitive solutions.
        </p>
        <Button/>
    </div>
  )
}

export default Data
