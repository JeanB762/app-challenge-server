import { Request, Response } from 'express';
import { ListUnitsUseCase } from './ListUnitsUseCase';

export class ListUnitsController {
  constructor(private listUnitsUseCase: ListUnitsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const units = await this.listUnitsUseCase.execute();

    return response.status(200).json(units);
  }
}
