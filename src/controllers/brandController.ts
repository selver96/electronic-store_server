import { Request, Response } from "express";
import ApiError from "../error/apiError";
const {Brand} = require('../models/models');

class TypeController {
    
    async getAll(req: Request, res: Response, next: any){
       try{
            const brand = await Brand.findAll();
            return res.json(brand);
        }
        catch (e: any){
            return next(ApiError.forbidden(e));
        }
    }

    async create(req: Request, res: Response, next: any){
        const {name} = await req.body;
        try{
            const brand = await Brand.create({name});
            return res.json(brand);
        }
        catch (e: any){
            return next(ApiError.forbidden(e));
        }
    }
}

export = new TypeController();