import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';




/*  */
const Navbar = () => {

    const[nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }




  return (
    <div className=' flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>React.</h1>
        <ul className='hidden md:flex'>
            <li className='p-4 '>Home</li>
            <li className='p-4'>Projects</li>
            <li className='p-4'>Engineering</li>
            <li className='p-4'>Maintenance</li>
            <li className='p-4 w-[8.2rem]'>Our Expertise</li>
            <li className='p-4 w-[8.2rem]'>Contact us</li>

        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose className='cursor-pointer' size={30} /> : <> <AiOutlineMenu  className='cursor-pointer' size={30}/></>}
             
        </div>


        <div className={nav ? 'fixed left-0 top-0 w-[80%] h-full border-r border-r-gray-700 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-6'>React.</h1>

            <ul className='p-4 uppercase'>
            <li className='p-4 border-b border-gray-600'>Home</li>
            <li className='p-4 border-b border-gray-600'>Company</li>
            <li className='p-4 border-b border-gray-600'>Resources</li>
            <li className='p-4 border-b border-gray-600'>About</li>
            <li className='p-4 border-b border-gray-600'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar