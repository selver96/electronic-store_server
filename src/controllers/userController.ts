import { Request, Response } from "express";

class UserController {
    
    async registration(req: Request, res: Response){

    }

    async login(req: Request, res: Response){

    }

    async check(req: Request, res: Response){
        res.json({mag: 'I checked'})
    }
}

export = new UserController();