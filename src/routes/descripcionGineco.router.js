import { Router } from "express";
import { descripcionGineco } from "../controllers/descripcionGineco.controller";
const controllerDescipcionGineco = new descripcionGineco();

const routerDescipcionGineco = Router();


// todo: get by username
routerDescipcionGineco.get(
  `descripciongineco/:expedienteId`,
  (req, res) => {
    controllerDescipcionGineco.getDescipcionGinecobyExpediente(req, res);
  }
);

// todo: create a new patient
routerDescipcionGineco.post(
  `descripciongineco/new`,
  (req, res) => {
    controllerDescipcionGineco.createDescripcionGineco(req, res);
  }
);


routerDescipcionGineco.put(`descripciongineco/edit/:expedienteId`,(req, res )=>{
  controllerDescipcionGineco.modifyDescripcionGineco(req,res)
})



export default routerDescipcionGineco;