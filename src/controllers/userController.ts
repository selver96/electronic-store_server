import { Request, Response } from "express";
import ApiError from "../error/apiError";

class UserController {
    
    async registration(req: Request, res: Response){

    }

    async login(req: Request, res: Response){

    }

    async check(req: Request, res: Response, next: any){
        const {id} = req.query
        if(!id){
            return next(ApiError.badRequest('Id tanimlanmadi'));
        }
        res.json({mag: 'I checked'})
    }
}

export = new UserController();