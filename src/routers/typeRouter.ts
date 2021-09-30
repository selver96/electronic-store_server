import { Router } from "express";
import typeController from '../controllers/typeController';
const router = Router();

router.get('/', typeController.getAll);
router.post('/create', typeController.create);

export = router;