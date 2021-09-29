import { Router } from "express";
import userRouter from './userRouter';
import deviceRouter from './deviceRouter';
import brandRouter from './brandRouter';
import typeRouter from './typeRouter';

const router = Router();

router.use('/user', userRouter);
router.use('/device', deviceRouter);
router.use('/type', typeRouter);
router.use('/brand', brandRouter);

export = router;