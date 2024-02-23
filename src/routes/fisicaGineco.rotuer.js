import {Router } from "express";
import { fisicaGinecoController } from "../controllers/fisicaGineco.controller";



const fisicagineco = new fisicaGinecoController();
const routerGineco = Router();
const path = '/fisicagineco'

// todo --> save consults & treatments
routerGineco.post(`${path}/new`, (req, res) => {
    fisicagineco.createFisicaGineco(req,res)
})

routerGineco.put(`${path}/:expedienteId`, (req, res) => {
    // llamar al controller
    fisicagineco.getFisicaGienoByExpedient(req, res)
})