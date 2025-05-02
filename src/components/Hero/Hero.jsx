import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from '../../assets/Praptis Resume.pdf'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt=""/>
        <h1><span>Hi! I'm Prapti,</span> Your Next Developer in the Making</h1>
        <p>Creative technophile blending code, design, and storytelling. An IT graduate passionate about building smart, user-focused solutions.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume"><a href={resume} target="_blank" rel="noopener noreferrer" className='anchor-link'>My resume</a></div>
        </div>
    </div>
  )
}

export default Hero