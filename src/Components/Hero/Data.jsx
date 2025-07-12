import React from 'react'
import Button from '../Button/Button'


/**
 * @function Data
 * @description Hero section component showcasing professional profile and key metrics
 * @returns {JSX.Element} Enhanced hero content with stats and refined messaging
 */
const Data = () => {
  return (
    <div className="home__data">
        <h1 className="home__title">
          Franklin <span className="home__title-accent">Anyanwu</span>
        </h1>
        <h3 className='home__subtitle'>Full Stack Developer & Digital Architect</h3>
        <p className="home__description">
          Transforming ideas into exceptional digital experiences through innovative 
          full-stack development. I architect scalable web applications with precision, 
          combining cutting-edge technologies with user-centered design principles to 
          deliver solutions that drive business growth and user engagement.
        </p>
        <div className="home__stats">
          <div className="home__stat">
            <span className="home__stat-number">15+</span>
            <span className="home__stat-label">Projects Delivered</span>
          </div>
          <div className="home__stat">
            <span className="home__stat-number">2+</span>
            <span className="home__stat-label">Years Experience</span>
          </div>
        </div>
        <Button/>
    </div>
  )
}

export default Data
