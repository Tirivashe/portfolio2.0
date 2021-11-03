import React, { useState, Dispatch, SetStateAction } from 'react'
import { FC } from 'react'
import { AiFillGithub, AiFillProject } from 'react-icons/ai'
import { MdClose } from 'react-icons/md'
import { IProject } from '../types'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeInUp, stagger } from '../animations'

interface Props {
  project: IProject
  showDetail: number|null
  setShowDetail: Dispatch<SetStateAction<number | null>>
}

const ProjectCard: FC<Props> = ({ project: { name, description, github_url, image_path, id, deployed_path, key_techs }, showDetail, setShowDetail }) => {

  

  return (
    <div>
      <Image src={image_path} alt="img" width={1280} height={600} layout='responsive'className='cursor-pointer' onClick={()=> setShowDetail(id)}/>
      <p className="my-2 text-center">{name}</p>

      {
        showDetail === id && (
          <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 rounded-lg md:p-10 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
            <motion.div variants={stagger} initial="initial" animate='animate'>
              <motion.div variants={fadeInUp} className='border-4 border-gray-100'>
                <Image src={image_path} width={300} height={150} layout='responsive'alt='img' />
              </motion.div>
              <motion.div variants={fadeInUp} className='flex justify-center my-4 space-x-3'>
                <a href={github_url} className='flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200'>
                  <AiFillGithub /><span>Github</span>
                </a>
                <a href={deployed_path} className='flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200'>
                  <AiFillProject /><span>Project</span>
                </a>
              </motion.div>
            </motion.div>

            <motion.div variants={stagger}>
              <motion.h2 variants={fadeInUp} className='mb-3 text-xl font-medium md:text-2xl'>{name}</motion.h2>
              <motion.h3 variants={fadeInUp} className='mb-3 font-medium'>{description}</motion.h3>
              <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
                { key_techs.map(tech => (
                  <span className='px-2 py-1 my-1 bg-gray-200 rounded-sm dark:bg-dark-200' key={tech}>{tech}</span>
                ))}
              </div>
            </motion.div>

            <button onClick={()=> setShowDetail(null)} className='absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200'>
              <MdClose size={30} />
            </button>

          </div>

        )
      }

    </div>
  )
}

export default ProjectCard
