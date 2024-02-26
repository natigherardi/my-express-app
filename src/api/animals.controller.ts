import type { Request, Response } from 'express'
import { animalsData } from '../data/animals-data'

export const getAnimals = async (_req: Request, res: Response): Promise<void> => {
  res.status(200).json(animalsData)
}
