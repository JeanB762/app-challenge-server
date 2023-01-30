import { Router } from 'express';
import { assetsRoutes } from './assets.routes';
import { authRoutes } from './auth.routes';
import { companiesRoutes } from './companies.routes';
import { unitsRoutes } from './units.routes';
import { usersRoutes } from './users.routes';

export const router = Router();

router.use('/assets', assetsRoutes);

router.use('/accounts', usersRoutes);

router.use('/company', companiesRoutes);

router.use('/units', unitsRoutes);

router.use(authRoutes);
