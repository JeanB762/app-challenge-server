import { Request, Response } from 'express';
import CreateAssetService from './CreateAssetsService';

export function createAsset(request: Request, response: Response) {
  const { name, description, owner } = request.body;

  CreateAssetService.execute({
    name,
    description,
    owner,
  });

  return response.status(201).json({ message: 'Asset created successfully!' });
}
