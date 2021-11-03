import React from 'react'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data'
import { motion } from 'framer-motion'
import { fadeInUp, routeAnimation, stagger } from '../animations'

function index() {
  return (
    <motion.div variants={routeAnimation} initial="initial" animate="animate" exit="exit" className='flex flex-col flex-grow px-6 pt-1'>
      <h5 className='my-3 font-medium'>Software engineer experienced in object-oriented programming, web and mobile development, developing using APIs and full stack development.</h5>
      <div className='flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100' style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}>
        <h6 className='my-3 text-lg font-bold tracking-wide'>What I Offer</h6>
        <motion.div variants={stagger} initial="initial" animate="animate" className='grid gap-6 md:grid-cols-2'>

          { services.map(service => (
            <motion.div variants={fadeInUp} key={Math.random()} className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1"> 
              <ServiceCard service={service}/>
            </motion.div>
          )) }
          
        </motion.div>
      </div>
    </motion.div>
  )
}

export default index
