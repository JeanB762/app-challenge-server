import { Request, Response } from 'express';
import { DeleteAssetUseCase } from './DeleteAssetUseCase';

export class DeleteAssetController {
  constructor(private deleteAssetUseCase: DeleteAssetUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    await this.deleteAssetUseCase.execute(id);

    return response.status(204).json();
  }
}
