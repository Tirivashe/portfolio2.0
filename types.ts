import { IconType } from "react-icons";

export interface IService{
  title: string,
  details: string,
  Icon: IconType
}

export interface ISkill{
  name: string,
  level: string,
  Icon: IconType
}

export interface IProject {
  id: number
  name: string,
  description: string,
  image_path: string,
  deployed_path: string,
  github_url: string,
  categories: Category[],
  key_techs: string[]
}

export type Category = "react"|"node"|"mongo"|"express"