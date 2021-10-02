import { Router } from "express";
import brandController from "../controllers/brandController";

const router = Router();

router.get('/brand', brandController.getAll);
router.post('/create', brandController.create);

export = router;