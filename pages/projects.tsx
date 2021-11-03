import React, { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import ProjectNavbar from '../components/ProjectNavbar'
import { projects as projectsData } from '../data'
import { Category } from '../types'
import { motion } from 'framer-motion'
import { fadeInUp, routeAnimation, stagger } from '../animations'

const Projects = () => {

  const [projects, setProjects] = useState(projectsData)
  const [active, setActive] = useState<Category|'all'>('all') 
  const [showDetail, setShowDetail] = useState<number | null>(null)


  const handleFilter = (category: Category | 'all') => {
    if(category === 'all'){
      setProjects(projectsData)
      setActive(category)
    }else{
      const activeProjects = projectsData.filter(project => project.categories.includes(category))
      setProjects(activeProjects)
      setActive(category)
    }
  }


  return (
    <motion.div variants={routeAnimation} initial="initial" animate="animate" exit='exit' className='px-5 py-2 overflow-y-scroll' style={{ height: "65vh" }}>
      <ProjectNavbar active={active} handleFilter={handleFilter}/>
      <motion.div variants={stagger} initial="initial" animate="animate" className='relative grid grid-cols-12 gap-4 my-3'>
        { projects.map(project =>( 
          <motion.div variants={fadeInUp} key={Math.random()} className='col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200'>
            <ProjectCard project={project} showDetail={showDetail} setShowDetail={setShowDetail}/>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Projects
