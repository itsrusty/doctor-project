import { Router } from "express";
import { consultaGineco } from "../controllers/consultaGineco.controller";


const consultGineco = new consultaGineco();
const routerGineco = Router();
const path = '/consultagineco'

// todo --> save consults & treatments
routerGineco.post(`${path}/new`, (req, res) => {
   //crear logica de crear consultaGineco 
})

routerGineco.put(`${path}/edit/:expedienteId`, (req, res) => {
    // llamar al controller
    consultGineco.updateConsult(req, res)
})