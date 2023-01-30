import { Request, Response } from 'express';
import { CreateAssetUseCase } from './CreateAssetUseCase';

export class CreateAssetController {
  constructor(private createAssetUseCase: CreateAssetUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
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
    const imageFile = request.file?.filename || '';

    await this.createAssetUseCase.execute({
      name,
      description,
      model,
      owner,
      status,
      healthlevel,
      image: imageFile,
      companyId,
      unitId,
      responsibles,
    });

    return response.status(201).send();
  }
}
