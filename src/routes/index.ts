import { Router } from "express";
import todoRouter from './todo.route';
import authRouter from './auth.route';
import { authenticateJWT } from "../middleware/authenticateJWT";

const router = Router()

router.use('/todo',authenticateJWT,todoRouter);
router.use('/auth',authRouter);


export default router