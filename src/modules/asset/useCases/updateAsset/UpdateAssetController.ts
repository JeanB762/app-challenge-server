import { Request, Response } from 'express';
import { UpdateAssetUseCase } from './UpdatAssetUseCase';

export class UpdateAssetController {
  constructor(private updateAssetUseCase: UpdateAssetUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const {
      name,
      description,
      model,
      owner,
      status,
      healthlevel,
      companyId,
      unitId,
      responsibles,
    } = request.body;
    const imageFile = request.file?.filename;

    await this.updateAssetUseCase.execute({
      id,
      name,
      description,
      model,
      owner,
      status,
      healthlevel,
      image: imageFile,
      companyId,
      responsibles,
      unitId,
    });

    return response.status(204).send();
  }
}
