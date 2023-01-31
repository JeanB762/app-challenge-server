import { NextFunction, Request, response, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { ErrorsHandler } from '../errors/ErrorsHandler';
import { MongoUsersRepository } from '../modules/accounts/repositories/implementations/MongoUserRepository';

interface IPayload {
  sub: string;
}

export async function ensureAuthentication(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new ErrorsHandler('Token missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: userId } = verify(
      token,
      '603efe5d016c96a27a00c76ad84aa9f9'
    ) as IPayload;

    const usersRepository = new MongoUsersRepository();

    const user = await usersRepository.findById(userId);

    if (!user) throw new ErrorsHandler('User does not exists', 401);

    return next();
  } catch (error) {
    throw new ErrorsHandler('Invalid token', 401);
  }
}
