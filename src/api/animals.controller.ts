import type { Request, Response } from 'express'

export const getAnimals = (_req: Request, res: Response): void => {
  res.status(200).json(['panda', 'dog', 'cat'])
}
