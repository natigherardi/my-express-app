import type { Request, Response } from 'express'
import { getAnimals } from './animals.controller'

describe('GIVEN an Animals Controlelr', () => {
  it('WHEN all animals are requested, THEN it should response with OK status', () => {
    const request: Partial<Request> = {}
    const response: Partial<Response> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    }

    getAnimals(request as Request, response as Response)
    expect(response.status).toHaveBeenCalledWith(200)
  })
})
