import React, { FC } from 'react'
import { IService } from '../types'

interface ServiceCardProps{
  service: IService
}


const ServiceCard:FC<ServiceCardProps> = ({ service: { title, details, Icon }}) => {

  const createMarkup = () => {
    return {
      __html: details
    }
  }


  return (
    <div className='flex items-center p-2 space-x-4'>
      <Icon className='w-12 h-12 text-green'/>
      <div className='text-sm'>
        <h4 className='font-bold'>{title}</h4>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  )
}

export default ServiceCard
