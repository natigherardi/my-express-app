import type { Request, Response } from 'express'
import { animalsData } from '../data/animals-data'

const animalsDataReceived = [...animalsData]

if (typeof animalsData = 'array') {
  animalsData.sort()
}

export const getAnimals = (_req: Request, res: Response): void => {
  res.status(200).json(animalsData)
}
