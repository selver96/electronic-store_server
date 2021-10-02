import { Request, Response } from "express";
import { v4 } from 'uuid';
import ApiError from "../error/apiError";
import path from 'path';
const {Device} = require('../models/models');

class TypeController {
    
    async create(req: Request, res: Response, next: any){
       try{
            const {name, price, brandId, typeId, info} = req.body;
            const {img} : any = req.files;
            let fileName = v4()+'.jpg';
            console.log(img)
            img.mv(path.resolve(__dirname,'..','static',fileName));
            const device = await Device.create({name: name, price: price, brandId: brandId, typeId: typeId, img: fileName, });
            return res.json(device);
        }
        catch (e: any){
            console.log(e);
            return next(ApiError.forbidden(e));
        }
    }

    async getAll(req: Request, res: Response, next: any){
        try{
            // const {id} : any = req.body
            // console.log(id)
            // const device = await Device.destroy({where: {
            //     id: id
            //   }});
            const device = await Device.findAll();
            return res.json(device);
        }
        catch (e: any){
            return next(ApiError.forbidden(e));
        }
    }
}

export = new TypeController();