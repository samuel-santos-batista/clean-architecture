import { Controller, HttpRequest } from '../../presentation/protocols'
import { Request, Response } from 'express'

export const adaptRoute = (controller: Controller) => {
  return async (request: Request, response: Response) => {
    const httpRequest: HttpRequest = {
      body: request.body
    }
    console.log(request)
    const httpResponse = await controller.handle(httpRequest)
    return response.status(httpResponse.statusCode).json(httpResponse.body)
  }
}
