import { aFamiliares } from "../controllers/aFamiliares.controller";
import { Router } from "express";

const controllerAFamiliares = new aFamiliares();
const routerAFamiliares = Router();
const path = "/antecedentesfamiliares";

routerAFamiliares.get(`${path}/:expedienteId`, (req, res) => {
    controllerAFamiliares.getbyExpendiente(req, res);
});


routerAFamiliares.post(`${path}/new`, (req, res) => {
    controllerAFamiliares.createAFamiliares(req, res)
})

routerAFamiliares.put(`${path}/edit/:expedienteId`, (req, res) => {
    controllerAFamiliares.modifyAFamiliares(req, res)
})


export default routerAFamiliares