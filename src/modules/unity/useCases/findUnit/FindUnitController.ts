import { Request, Response } from 'express';
import { FindUnitUseCase } from './FindUnitUseCase';

export class FindUnitController {
  constructor(private listUnitUseCase: FindUnitUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const unit = await this.listUnitUseCase.execute(id);

    if (!unit)
      return response.status(400).json({ error: 'Unit not found' });

    return response.status(200).json(unit);
  }
}
