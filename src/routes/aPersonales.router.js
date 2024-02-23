import { aPersonales } from "../controllers/aPersonales.controller";
import { Router } from "express";


const controllerAPersonales = new aPersonales();
const routerAPersonales = Router();
const path = "/antecedentespersonales";

// todo: get by username
routerAPersonales.get(
  `${path}/:expedienteId`,
  (req, res) => {
    controllerAPersonales.getbyExpediente(req, res);
  }
);

// todo: create a new patient
routerAPersonales.post(
  `${path}/new`,
  (req, res) => {
    controllerAPersonales.createAPersonales(req, res);
  }
);

routerAPersonales.put(`${path}/edit/:expedienteId`, (req, res) => {
  controllerAPersonales.modifyAPersonales(req, res)
})

export default routerAPersonales;