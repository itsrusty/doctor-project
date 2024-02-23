import { aGineObstController } from "../controllers/aGineObst.controller";
import { Router } from "express";

const controllerAGineObst = new aGineObstController()
const routerAGineObst = Router();
const path = '/antecedentesagineobst'

routerAGineObst.get(`${path}/:expedienteId`, (req, res) => {
    controllerAGineObst.getAGineObstByExpediente(req, res)
})

routerAGineObst.post(`${path}/new`, (req, res) => {
    controllerAGineObst.createAGineObst(req, res);
})

routerAGineObst.put(`${path}/edit/:expedienteId`, (req, res) => {
    controllerAGineObst.modifyAGineObst(req, res)
})

export default routerAGineObst