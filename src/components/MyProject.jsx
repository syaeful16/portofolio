import React from 'react'
import DesignerImg from '../assets/designer.png'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const myProject = [
  {title:'UI/UX Designer', img:DesignerImg, category:'Mobile ∙ Website', link:'/project#uix'},
  {title:'Design Feed', img:DesignerImg, category:'Instagram', link:'/project#feed'},
  {title:'Program', img:DesignerImg, category:'Web ∙ System', link:'/project#program'},
]

const MyProject = () => {
  return (
    <section className='w-screen py-32 p-container'>
      <div className="w-full h-full gap-10 md:gap-0 grid md:grid-cols-2" data-aos='fade-up' data-aos-delay='300'>
        <div className="flex flex-col justify-center font-poppins">
          <h1 className='text-white font-bold text-5xl md:text-4xl xl:text-6xl md:w-[70%] xl:w-[80%] leading-normal md:leading-normal xl:leading-normal'>My Awesome Project</h1>
          <p className='w-[100%] sm:w-[85%] xl:w-[76%] leading-8 lg:leading-[2.5rem] xl:leading-loose pt-8 text-white sm:text-md xl:text-lg font-extralight'>The following is a project that I have made with the skills I have so far. I am a person who likes to design and create simple programs. This can produce several designs such as UI / UX designs and Instagram feeds. Besides that, it also produces a program in the form of a website and an AI-based system.</p>
          <Link to='/project' className='text-[#FFD568] text-lg mt-6'>See more</Link>
        </div>
        <div className='flex flex-col justify-center gap-6'>
          {myProject.map((project, index) => (
            <HashLink key={index} to={project.link} className="w-[100%] lg:w-[80%] h-28 rounded-lg gap-4 md:gap-6 flex justify-between p-4 border border-white/50 bg-white/5 hover:translate-x-6 hover:border-[#FFD568] ease-in-out duration-300">
              <img src={project.img} alt={project.name}/>
              <div className="flex flex-col font-poppins justify-center w-full">
                <h1 className='text-white text-lg md:text-xl 2xl:text-2xl'>{project.title}</h1>
                <p className='text-[#FFD568] text-sm font-thin'>{project.category}</p>
              </div>
              <div className="h-full flex items-center float-left">
                <HiArrowNarrowRight size={32} className='text-white'/>
              </div>
            </HashLink>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MyProject