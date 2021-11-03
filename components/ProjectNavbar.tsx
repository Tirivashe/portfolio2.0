import React, { FC } from 'react'
import { Category } from '../types'

interface NavItemProps{
  value: Category | 'all'
  handleFilter: (category: Category | 'all') => void
  active: Category|'all'
}

const NavItem: FC<NavItemProps> = ({ value, handleFilter, active }) => {

  let styles =' capitalize cursor-pointer hover:text-green' 
  value === active ? styles += " text-green" : null

  return (
    <div className={styles} onClick={()=> handleFilter(value)}>{value}</div>
  )
}

interface Props {
  active: Category | 'all'
  handleFilter: (category: Category|'all')=> void
}

const ProjectNavbar: FC<Props> = (props) => {
  return (
    <div className='flex px-3 py-2 space-x-3 overflow-x-auto' >
      <NavItem value='all' {...props}/>
      <NavItem value='react' {...props}/>
      <NavItem value='node' {...props}/>
      <NavItem value='mongo' {...props}/>
      <NavItem value='express' {...props}/>
    </div>
  )
}

export default ProjectNavbar
