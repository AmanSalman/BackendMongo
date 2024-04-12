import { Router } from 'express';
import * as authController from './auth.controller.js';
import { validation } from '../../middleware/validation.js';
import { signinSchema, signupSchema } from './auth.validation.js';
const router = Router();

router.post('/signup', validation(signupSchema) , authController.signup);
router.post('/signin', validation(signinSchema), authController.signin);
router.get('/confirmEmail/:token', authController.confirmEmail)
export default router;