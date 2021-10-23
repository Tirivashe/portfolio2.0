import React from 'react'
import { FC } from 'react'
import { ISkill } from '../types'

interface Props {
  data: ISkill,
}

const Bar: FC<Props> = ({ data: { name, level, Icon } }) => {
  return (
    <div className='my-2 text-white bg-gray-200 rounded-full dark:bg-dark-200'>
      <div className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-600" style={{ width: level }}>
        <Icon className='mr-3'/>
        {name}
      </div>
    </div>
  )
}

export default Bar
