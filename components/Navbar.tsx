import React, { Dispatch, FC ,SetStateAction,useState } from 'react'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

interface NavItemProps{
  activeItem: string,
  name: string,
  setActiveItem: Dispatch<SetStateAction<string>>,
  route: string
}

const NavItem: FC<NavItemProps> = ({ activeItem, name, route, setActiveItem }) => {
  return (
    activeItem !== name ? (
      <Link href={route}>
        <a>
          <span onClick={() => setActiveItem(name)} className='hover:text-green'>{name}</span>
        </a>
      </Link>
    ): null
  )
}

const Navbar = () => {

  const [activeItem, setActiveItem] = useState<string>('')
  const { pathname } = useRouter()

  useEffect(() => {
    if(pathname === '/') setActiveItem('About')
    if(pathname === '/resume') setActiveItem('Resume')
    if(pathname === '/projects') setActiveItem('Projects')
  }, [])

  return (
    <div className='flex items-center justify-between px-5 py-3 my-3'>
      <span className='text-xl font-bold border-b-4 text-green border-green md:text-2xl '>{activeItem}</span>

      <div className='flex space-x-5 font-lg'>
        <NavItem activeItem={activeItem} name='About' route='/' setActiveItem={setActiveItem} />
        <NavItem activeItem={activeItem} name='Resume' route='/resume' setActiveItem={setActiveItem} />
        <NavItem activeItem={activeItem} name='Projects' route='/projects' setActiveItem={setActiveItem} />
      </div>



    </div>
  )
}

export default Navbar
