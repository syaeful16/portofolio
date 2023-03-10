import React from 'react'
import MyPhoto from '../assets/myPhoto2.png'
import { HiArrowNarrowRight } from 'react-icons/hi';
import Typed from 'react-typed'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='w-screen h-[90vh] p-container font-poppins'>
      <div className="w-full h-full xl:grid grid-cols-2">
        <div className='w-full h-full flex flex-col justify-center'>
          <h2 className='text-3xl md:text-4xl xl:text-5xl font-semibold text-gradient py-2' data-aos='fade-down' data-aos-delay='400'>
            <Typed
              strings={['UI/UX Designer', 'Web Developer']}
              typeSpeed={140}
              backSpeed={50}
              loop
            />
          </h2>
          <h1 className='text-5xl md:text-6xl 2xl:text-7xl font-bold text-white mt-3' data-aos='fade-down' data-aos-delay='400'>Syaefulloh Arnas</h1>
          <div className="bg-[#FFD568] w-[50%] md:w-[30%] h-[4px] md:h-[6px] rounded-lg my-4 md:my-8 lg:my-10" data-aos='fade-down' data-aos-delay='400'></div>
          <p className='text-white font-extralight text-sm md:text-base lg:text-lg xl:text-base 2xl:text-lg leading-loose md:leading-loose lg:leading-loose xl:leading-loose 2xl:leading-loose pt-4 w-full md:w-[80%]' data-aos='fade-down' data-aos-delay='400'>During my college days I participated in several internal activities as a designer such as designing ui/ux and filling in Instagram content using <span className='font-bold'>Figma</span> and <span className='font-bold'>Adobe XD</span>. Besides that, I have made website projects with 
            <span className='font-bold'> React js</span>, 
            <span className='font-bold'> Laravel</span>, 
            <span className='font-bold'> HTML</span>, 
            <span className='font-bold'> PHP</span>, 
            <span className='font-bold'> CSS</span>, 
            <span className='font-bold'> JavaScript</span>, and 
            <span className='font-bold'> Python</span>. If you want to get more information from me, you can contact me. Thank You</p>
          <Link to='/contact' className='text-[#FFD568] flex items-center gap-5 hover:gap-10 ease-in-out duration-200 text-lg md:text-xl mt-12 w-max' data-aos='fade-right' data-aos-delay='400'>Let's talk <HiArrowNarrowRight/></Link>
        </div>
        <div className='relative flex flex-col justify-center w-full h-full'>
          <img src={MyPhoto} alt="" className='hidden absolute left-0 xl:block w-[60%]' data-aos='fade-left' data-aos-delay='400'/>
          <div className="absolute bottom-20 right-0 hidden xl:block" data-aos='fade-left' data-aos-delay='600'>
            <h2 className='text-white font-poppins text-lg'>Fresh Graduate</h2>
            <h1 className='text-[#FFD568] font-poppins md:text-xl 2xl:text-2xl'>S1 Teknik Informatika</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero