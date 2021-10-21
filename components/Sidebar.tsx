import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { GiTie } from 'react-icons/gi'
import React from 'react'


const Sidebar = () => {
  return (
    <div>
      <h3 className='my-4 text-3xl font-medium tracking-wider font-kaushan'>
        <span className='text-green'>Tirivashe </span>
        Shamhu
      </h3>
      <p className='px-2 py-1 my-3 bg-gray-200 rounded-full'>Software Developer</p>
      <a href='' download='' className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full'> <GiTie className='w-6 h-6' />  Download Resume</a>

      <div className='flex justify-around w-9/12 mx-auto my-5 text-green md:w-full'>
        <a href="">
          <AiFillGithub className='w-8 h-8 cursor-pointer'/>
        </a>
        <a href="">
          <AiFillLinkedin className='w-8 h-8 cursor-pointer'/>
        </a>
      </div>

      <div className='py-4 my-5 bg-gray-200' style={{ marginLeft: '-1rem', marginRight: '-1rem' }} >
        <div className='flex items-center justify-center space-x-2'>
          <GoLocation />
          <span>Norton, Zimbabwe</span>
        </div>
        <p className='my-2'>shaymusts@gmail.com</p>
        <p className='my-2'>+263774431553</p>
      </div>
      <button onClick={() => open('mailto:shaymusts@gmail.com')} className='w-8/12 px-5 py-2 my-2 text-white rounded-full focus:outline-none bg-gradient-to-r from-green to-blue-400'>Email Me</button>
      <button className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400'>Theme</button>
    </div>
  )
}

export default Sidebar
