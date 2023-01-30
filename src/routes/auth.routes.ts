import { Router } from 'express';
import authenticateUserController from '../modules/accounts/useCases/authenticateUser';

export const authRoutes = Router();

authRoutes.post('/login', (request, response) => {
  return authenticateUserController().handle(request, response);
});
