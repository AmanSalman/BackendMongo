import { Router } from "express";
import * as UserConrtoller from './user.controller.js';
import { auth } from "../../middleware/authentication.js";

const router = Router();
router.get('/profile', auth , UserConrtoller.Profile);


export default router;