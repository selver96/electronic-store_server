import { Router } from "express";
import userController from '../controllers/userController';
const router = Router();

router.get('/auth',userController.check);
router.post('/registration',userController.registration);
router.post('/login',userController.login);

export = router;