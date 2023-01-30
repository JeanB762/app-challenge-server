import { Request, Response } from 'express';
import { FindAssetUseCase } from './FindAssetUseCase';

export class FindAssetController {
  constructor(private listAssetUseCase: FindAssetUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const asset = await this.listAssetUseCase.execute(id);

    if (!asset) return response.status(400).json({ error: 'Asset not found' });

    return response.status(200).json(asset);
  }
}
