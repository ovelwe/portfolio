import React from 'react'
import Links from './Links'
import '../assets/styles/globals.scss'

const About = () => {
  return (
    <div className='w-full flex flex-col justify-center text-center gap-[50px]'>
      <div className="text-glow-container">
        <p className='xl:text-[32px] text-glow sm:text-[24px]'>я занимаюсь <span>backend</span> и <span>frontend</span> разработкой<br />
        а так же <span>дизайном.</span></p>
        <img className="text-glow-bg" src="/p-glow.png" alt="bg" />
        </div>
        <Links />
    </div>
  )
}

export default About