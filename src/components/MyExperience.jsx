import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { experience } from './Experience';

// const myActivity = [
//   {title: 'Study Orientation Committee', img: PanitiaImg, from: 'Institut Teknologi Telkom Purwokerto', description: 'Guiding new students in the campus introduction period'},
//   {title: 'Student Staff', img: StudentImg, from: 'Institut Teknologi Telkom Purwokerto', description: 'Help manage campus document data, manage the Informatics Engineering study program campus website, and create content on Informatics Engineering study program Instagram'},
//   {title: '2nd Winner of IT Telkom Purwokerto Digital Awards', img: WinImg, from: 'Category Gemastik', description: 'Create a real-time web-based SIBI sign language learning system using the Python programming language.'},
//   {title: 'Campus Management Team', img: OtakkananImg, from: 'Institut Teknologi Telkom Purwokerto', description: 'Supporting the process of Admission of New Students, Digital Branding and Digital Marketing so that everything can run well and design campus website Instagram content.'},
//   {title: 'Assistant Lecturer for Database Practicum', img: BasdatImg, from: 'Institut Teknologi Telkom Purwokerto', description: 'Teaching 2 classes for one semester with MySQL material using the XAMPP CLI'},
//   {title: 'Assistant Lecturer for Digital Systems Practicum', img: SisdigImg, from: 'Institut Teknologi Telkom Purwokerto', description: 'Teaching for one semester with logic gates material using DSCH software'},
// ]


const MyExperience = () => {

  return (
    <section className='relative w-screen p-container font-poppins'>
      <div className=" bg-black/20 p-10 md:p-20 2xl:p-32 rounded-lg">
        <div className="flex justify-between items-center" data-aos='fade-up' data-aos-delay='300'>
          <h1 className='text-gradient font-bold text-5xl md:text-4xl xl:text-6xl md:w-[70%] xl:w-[80%] leading-normal md:leading-normal xl:leading-normal'>My Experience</h1>
          <Link to='/experience' className='text-[#FFD568] hidden md:flex items-center gap-5 hover:gap-10 ease-in-out duration-200 text-lg md:text-xl mt-12 w-max' href="http://">See more <HiArrowNarrowRight/></Link>
        </div>
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-12 gap-y-24 pt-12">
          {experience.map((exp, index) => (
            <>
              { index < 6 ? 
              <div key={index} className="" data-aos='fade-up' data-aos-delay='300'>
                <img src={exp.img} alt={exp.title} className='w-full h-auto object-cover'/>
                <h1 className='text-white text-xl md:text-[26px] font-bold pt-8 font-poppins'>{exp.title}</h1>
                <p className='text-[#9D9D9D] font-light text-sm md:text-lg font-poppins pt-2'>{exp.from}</p>
                <p className='text-white text-justify text-base font-poppins pt-10 font-extralight leading-relaxed'>{exp.description}</p>
              </div>
              : ''}
            </>
          ))}
        </div>
        <Link to='/experience' className='text-[#FFD568] md:hidden flex items-center gap-5 hover:gap-10 ease-in-out duration-200 text-lg md:text-xl mt-12 w-max'>See more <HiArrowNarrowRight/></Link>
        {/* <button className='text-white bg-red-500' onClick={handleModal}>tets</button>
        {showModal ? <Modal/> : ''} */}
      </div>
    </section>
  )
}

export default MyExperience