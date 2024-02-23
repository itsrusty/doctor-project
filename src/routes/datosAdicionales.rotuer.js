import { Router } from "express";
import { datosAdicionales } from "../controllers/datosAdicionales.controller";


const controllerDatosAdicionales = new datosAdicionales();
const routerDatosAdicionales = Router();
const path = "/datosadicionales";

routerDatosAdicionales.get(`${path}/:expedienteId`, (req, res) => {
    controllerDatosAdicionales.getDatosAdicionales(req, res)
})

routerDatosAdicionales.post(`${path}/new`, (req, res) => {
    controllerDatosAdicionales.createDatosAdicionales(req, res)
})

routerDatosAdicionales.put(`${path}/edit/:expedienteId`,(req, res )=>{
    controllerDatosAdicionales.modifyDatosAdicionales(req,res)
})