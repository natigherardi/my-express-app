import type { Request, Response } from 'express'
import { animalsData, type Animal } from '../data/animals-data'

export const getAnimals = (_req: Request, res: Response): void => {
  res.status(200).json(animalsData)
}

const filterAnimals = (animals: Animal[], filter: string): Animal[] => {
  return animals.filter(animal => animal.name.toLowerCase().includes(filter.toLowerCase()))
}

export const getAnimalsByFilter = (req: Request, res: Response): void => {
  const filter = req.params.filter
  const filteredAnimals = filterAnimals(animalsData, filter)
  res.status(200).json(filteredAnimals)
}
