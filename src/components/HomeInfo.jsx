import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons'


const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain' />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='smtext-x1 sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'> 
        Hi, I am <span className='font-semibold'>Marvin</span> 👋
        <br/> 
        A Multi-Versatile Engineer 
        </h1> 
    ),
    2: (
        <InfoBox 
            text = "Studied Chemical Engineering, Self Taught in Software Engineering, and passionate about Biological Engineering."
            link = "/about"
            btnText="Learn More"
        />
    ),
    3: (
        <InfoBox 
            text = "Led multiple projects to success for corporate, non-profit, & personal ventures. Curious about their impact?"
            link = "/projects"
            btnText="View Portfolio"
        />
    ),
    4: (
        <InfoBox 
            text = "Need help on a project  or looking for a Dev?. I'm just a few clicks away!"
            link = "/contact"
            btnText="Let's Talk"
        />
    ),
} 

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo