import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { HiMenuAlt3 } from 'react-icons/hi'
import { MdOutlineClose } from 'react-icons/md'

const Navbar = () => {
  const [ btnNavbar, setBtnNavbar ] = useState(false)

  const handleNav = () => {
    setBtnNavbar(!btnNavbar)
    console.log(btnNavbar)
  }

  return (
    <div className='w-full p-container p-6 font-poppins flex justify-between'>
      <h1 className='text-gradient font-bold text-3xl'>SA.</h1>
      <ul className='text-white hidden md:flex gap-10 font-extralight items-center'>
        <li className='cursor-pointer'><Link to='MyProject' spy={true} smooth={true} offset={20} duration={800}>Project</Link></li>
        <li className='cursor-pointer'><Link to='MyExperience' spy={true} smooth={true} offset={20} duration={800}>Experience</Link></li>
      </ul>
      <div className="flex md:hidden items-center" onClick={handleNav}>
        { btnNavbar ? <MdOutlineClose className='text-white' size={20}/> : <HiMenuAlt3 className='text-white' size={24}/> }
      </div>
      <div className={ btnNavbar ? 'fixed left-0 top-0 w-[60%] h-full backdrop-blur-lg bg-[#030E21]/50 shadow-md ease-in-out duration-500' : 'fixed left-[-100%] top-0 w-[80%] h-full duration-500'}>
        <h1 className='text-gradient font-bold text-3xl p-6'>Menu</h1>
        <ul className='font-poppins text-white p-3'>
          <li className='cursor-pointer p-3'><Link to='MyProject' spy={true} smooth={true} offset={20} duration={800} onClick={handleNav}>Project</Link></li>
          <li className='cursor-pointer p-3'><Link to='MyExperience' spy={true} smooth={true} offset={20} duration={800} onClick={handleNav}>Experience</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar