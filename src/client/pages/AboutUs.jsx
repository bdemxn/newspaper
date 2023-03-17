import React from 'react';
import { figma, github, linkedin, netlify, nodejs, react, tailwindcss } from '../../assets';

function AboutUs() {
  return (
    <div>
      <div className='text-center mt-28'>
        <p className='font-bold text-2xl animate__animated animate__fadeInUp'>Developed by Kevin Bonilla</p>
        <p className='mx-96 font-semibold my-2 animate__animated animate__fadeIn text-gray-400'>
          {
            `Hello, I’m Kevin, a junior front-end developer from Nicaragua
          I’ve developed this website using these`
          }
        </p>
        <div className='flex gap-2 items-center justify-center animate__animated animate__fadeInUp'>
          <img src={nodejs} alt="node" className='w-12 h-12' />
          <img src={react} alt="react" className='w-12 h-12' />
          <img src={tailwindcss} alt="tailwindcss" className='w-12 h-12' />
          <img src={netlify} alt="netlify" className='w-22 h-22' />
          <img src={figma} alt="figma" className='w-12 h-12' />
        </div>
        <div className='animate__animated animate__fadeInUp'>
          <p className='text-center text-2xl mt-20 font-bold'>Social Medias</p>
          <p className='text-center text-gray-400 font-semibold'>You can contact me using:</p>
          <div className='flex gap-3 justify-center mt-5'>
            <a href="https://github.com/bdemxn">
              <img src={github} alt="github" className='w-12 hover:scale-110 duration-300 transition-all' />
            </a>
            <a href="https://www.linkedin.com/in/kb1909zzz/">
              <img src={linkedin} alt="linkedin" className='w-12 hover:scale-110 duration-300 transition-all' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;