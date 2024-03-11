import type { Request, Response } from 'express'
import { animalsData } from '../data/animals-data'
import { AnimalType, type Animal } from '../models/animal'

export const getAnimals = (_req: Request, res: Response): void => {
  res.status(200).json(animalsData)
}

const filterAnimals = (animals: Animal[], filter: string): Animal[] => {
  return animals.filter(animal => animal.type.toLowerCase() === filter.toLowerCase())
}

export const getAnimalsByFilteredType = (req: Request, res: Response): void => {
  const type = req.params.type

  if (Object.values(AnimalType).includes(type as AnimalType)) {
    const filteredAnimals = filterAnimals(animalsData, type)
    res.status(200).json(filteredAnimals)
    return
  }

  res.status(400).json({ message: 'Invalid animal type' })
}
