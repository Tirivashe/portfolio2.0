import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { GiTie } from 'react-icons/gi'
import React from 'react'
import { useTheme } from 'next-themes'


const Sidebar = () => {
  const {theme, setTheme} = useTheme()

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark': 'light')
  }

  return (
    <div>
      <h3 className='my-4 text-3xl font-medium tracking-wider font-kaushan'>
        <span className='text-green'>Tirivashe </span>
        Shamhu
      </h3>
      <p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200'>Software Developer</p>
      <a href='/assets/Tirivashe Shamhu Resume.pdf' download='Tirivashe Shamhu Resume.pdf' className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200'> <GiTie className='w-6 h-6' />  Download Resume</a>

      <div className='flex justify-around w-9/12 mx-auto my-5 text-green md:w-full'>
        <a href="https://github.com/Tirivashe" aria-label='Github'>
          <AiFillGithub className='w-8 h-8 cursor-pointer'/>
        </a>
        <a href="https://www.linkedin.com/in/tirivashe-shamhu" aria-label='LinkedIn'>
          <AiFillLinkedin className='w-8 h-8 cursor-pointer'/>
        </a>
      </div>

      <div className='py-4 my-5 bg-gray-200 dark:bg-dark-200' style={{ marginLeft: '-1rem', marginRight: '-1rem' }} >
        <div className='flex items-center justify-center space-x-2'>
          <GoLocation />
          <span>Norton, Zimbabwe</span>
        </div>
        <p className='my-2'>shaymusts@gmail.com</p>
        <p className='my-2'>+263776202079</p>
      </div>
      <button onClick={() => open('mailto:shaymusts@gmail.com')} className='w-8/12 px-5 py-2 my-2 text-white bg-black rounded-full focus:outline-none bg-gradient-to-r from-green to-blue-400'>Email Me</button>
      <button onClick={changeTheme} className='w-8/12 px-5 py-2 my-2 text-sm text-white bg-black rounded-full bg-gradient-to-r from-green to-blue-400'>Change Theme</button>
    </div>
  )
}

export default Sidebar
