import React from 'react'
import './styles/Footer.css'

const Footer = ({author}) => {
  return (
    <section className='footer__container'>
      <footer className="footer">
        <h3>{author}</h3>
        <div className='waves'>
          <div className='wave' id='wave1'></div>
          <div className='wave' id='wave2'></div>
          <div className='wave' id='wave3'></div>
          <div className='wave' id='wave4'></div>
        </div>
      </footer>
    </section>
  )
}

export default Footer
