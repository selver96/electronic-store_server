import { Request, Response } from "express";
import ApiError from "../error/apiError";
const {Type} = require('../models/models');

class TypeController {
    
    async getAll(req: Request, res: Response, next: any){
       try{
            const types = await Type.findAll();
            return res.json(types);
        }
        catch (e: any){
            return next(ApiError.forbidden(e));
        }
    }

    async create(req: Request, res: Response, next: any){
        const {name} = await req.body;
        try{
            const type = await Type.create({name});
            return res.json(type);
        }
        catch (e: any){
            return next(ApiError.forbidden(e));
        }
    }
}

export = new TypeController();