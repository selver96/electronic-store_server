require('dotenv').config();
import express, { Application } from "express";
import sequelize from './database/config';
import cors from 'cors'; 
import router from './routers/routers';
import fileUpload from 'express-fileupload';
import path from 'path';
const middleware = require('./middleware/ErrorHandlingMiddleware');

const app: Application = express();
const HOST_NAME: string = process.env.HOST_NAME || 'j';
const PORT: string = process.env.PORT || '6000';

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname,'static')));
app.use(fileUpload({}))
app.use('/api',router);

app.use(middleware);

const start = async () =>{
    try{
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () =>{
            console.log(`Server run in http//${HOST_NAME}:${PORT}`);
        });

    }catch (e){
        console.log(`ERROR is ${e}`);
    }
}

start();