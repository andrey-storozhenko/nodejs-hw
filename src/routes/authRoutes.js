import { Router } from 'express';
import { celebrate } from 'celebrate';
import { loginUser, logoutUser, refreshUserSession, registerUser } from '../controllers/authController.js';
import { loginUserSchema , registerSchema } from '../validations/authValidation.js';

const router = Router();

router.post('/auth/register', celebrate(registerSchema), registerUser);

router.post('/auth/login', celebrate(loginUserSchema), loginUser);

router.post('/auth/refresh', refreshUserSession);

router.post('/auth/logout', logoutUser);

export default router;
