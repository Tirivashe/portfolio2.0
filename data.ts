import { RiComputerLine} from 'react-icons/ri'
import { FaServer, FaCogs, FaAward} from 'react-icons/fa'
import { AiOutlineApi} from 'react-icons/ai'
import { MdPeopleAlt} from 'react-icons/md'
import { BsCircleFill } from 'react-icons/bs'
import { IService, ISkill } from './types'


export const services: IService[] = [
  {
    title: "Frontend Development",
    details: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo",
    Icon: RiComputerLine
  }, 

  {
    title: 'Backend Development',
    details: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo",
    Icon: FaServer
  },
  
  {
    title: 'API Development',
    details: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo",
    Icon: AiOutlineApi
  },

  {
    title: 'Technical Skills',
    details: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo",
    Icon: FaCogs
  },

  {
    title: 'Other Skills',
    details: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo",
    Icon: MdPeopleAlt
  },

  {
    title: 'Certifications or Awards',
    details: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo",
    Icon: FaAward
  },
]

export const languages: ISkill[] = [
  {
    name: 'JavaScript',
    level: '70%',
    Icon: BsCircleFill
  },

  {
    name: 'TypeScript',
    level: '70%',
    Icon: BsCircleFill
  },

  {
    name: 'React',
    level: '70%',
    Icon: BsCircleFill
  },

  {
    name: 'Node',
    level: '70%',
    Icon: BsCircleFill
  },
]

export const tools: ISkill[] = [
  {
    name: 'VSCode',
    level: '50%',
    Icon: BsCircleFill
  },

  {
    name: 'Figma',
    level: '40%',
    Icon: BsCircleFill
  },

  {
    name: 'Framer',
    level: '40%',
    Icon: BsCircleFill
  },

  {
    name: 'Eclipse',
    level: '60%',
    Icon: BsCircleFill
  },
]