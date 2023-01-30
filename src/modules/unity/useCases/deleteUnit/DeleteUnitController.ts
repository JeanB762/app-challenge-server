import { Request, Response } from 'express';
import { DeleteUnitUseCase } from './DeleteUnitUseCase';

export class DeleteUnitController {
  constructor(private deleteUnitUseCase: DeleteUnitUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const unit = await this.deleteUnitUseCase.execute(id);

    return response.status(204).json(unit);
  }
}
