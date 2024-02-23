import { Router } from "express";
import { consultaObstetro } from "../controllers/consultaObstetro.controller";

const controllerFichaIdentificacion = new consultaObstetro();
const routerConsultaObstetro = Router();
const path = "/consultaobstetro";

// todo: get all patients
routerConsultaObstetro.get(`${path}/all`, (req, res) => {
  controllerFichaIdentificacion.getConsultasObstetro(req, res);
});

// todo: get by username
routerConsultaObstetro.get(
  `${path}/antecedentes/:expedienteId`,
  (req, res) => {
    controllerFichaIdentificacion.getAntecedentesPatients(req, res);
  }
);

// todo: create a new patient
routerConsultaObstetro.post(
  `${path}/new`,
  (req, res) => {
    controllerFichaIdentificacion.createConsultaObstetro(req, res);
  }
  
);

export default routerConsultaObstetro;