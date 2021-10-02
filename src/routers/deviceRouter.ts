import { Router } from "express";
import deviceController from "../controllers/deviceController";

const router = Router();

router.get('/device', deviceController.getAll);
router.post('/create', deviceController.create);

export = router;