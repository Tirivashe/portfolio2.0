import React from 'react'
import { FC } from 'react'
import { ISkill } from '../types'
import { motion } from 'framer-motion'

interface Props {
  data: ISkill,
}

const Bar: FC<Props> = ({ data: { name, level, Icon } }) => {

  const variants = {
    initial: {
      width: 0
    },
    animate: {
      width: level,
      transition: {
        duration: 0.4,
        type: 'spring',
        damping: 10,
        stifness: 100
      }
    }
  }

  return (
    <div className='my-2 text-white bg-gray-200 rounded-full dark:bg-dark-200'>
      <motion.div variants={variants} initial="initial" animate="animate" className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-600" style={{ width: level }}>
        <Icon className='mr-3'/>
        {name}
      </motion.div>
    </div>
  )
}

export default Bar
