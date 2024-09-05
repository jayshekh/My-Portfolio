import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img3.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () =>
{
    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt="" />
            <h1><span>I'm Jay Shekh,</span> Frontend Developer at Karmsoft.</h1>
            <p>I am a frontend developer at KarmSoft with over 2 years of experience in React.js and Node.js. I specialize in building and optimizing web applications.</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me </AnchorLink></div>
                <div className="hero-resume">My Resume</div>
            </div>

        </div>
    )
}

export default Hero