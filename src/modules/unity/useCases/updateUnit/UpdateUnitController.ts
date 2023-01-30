import { Request, Response } from 'express';
import { UpdateUnitUseCase } from './UpdatUnitUseCase';

export class UpdateUnitController {
  constructor(private updateUnitUseCase: UpdateUnitUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, companyId } = request.body;

    await this.updateUnitUseCase.execute({ id, name, companyId });

    return response.status(204).send();
  }
}
