import { Router } from "express";
import { fichaIdentificacion } from "../controllers/fichaIdentificacion.controllers";

const controllerFichaIdentificacion = new fichaIdentificacion();
const routerFichaIdentificacion = Router();
const path = "/fichasidentificacion";

// todo: get all patients
routerFichaIdentificacion.get(`${path}/all`, (req,res) => {
  controllerFichaIdentificacion.getPatients(req, res);
});

// todo: get by username
//routerFichaIdentificacion.get(
//`${path}/filterName`,
//(req: Request, res: Response) => {
//controllerFichaIdentificacion.getPatientsByName(req, res);
//}
//);

// todo: show by filter
//routerFichaIdentificacion.get(
//  `${path}/filtered/:filter`,
//  (req: Request, res: Response) => {
//    controllerFichaIdentificacion.getPatientsFiltred(req, res);
//  }
//);

routerFichaIdentificacion.get(`${path}/:expedienteId`, (req, res) => {
  controllerFichaIdentificacion.getPatientsByExpedient(req, res);
});

routerFichaIdentificacion.post(
  `${path}/create-patient`,
  (req, res) => {
    controllerFichaIdentificacion.createFichaIdentificacion(req, res);
  }
);

routerFichaIdentificacion.put(
  `${path}/edit/:expedienteId`,
  (req, res) => {
    controllerFichaIdentificacion.modifyFichaIdentificacion(req, res);
  }
);
export default routerFichaIdentificacion;