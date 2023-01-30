import { Request, Response } from 'express';
import { ListAssetsUseCase } from './ListAssetsUseCase';

export class ListAssetsController {
  constructor(private listAssetsUseCase: ListAssetsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const assets = await this.listAssetsUseCase.execute();

    return response.status(200).json(assets);
  }
}
