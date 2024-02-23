import { Router } from "express";
import { tratamientoObstetroController } from "../controllers/tratamientoObstetro.controller";

const tratamientoObstetro = new tratamientoObstetroController();
const routerTratamientoObstetro = Router();

// todo --> save consults & treatments
routerTratamientoObstetro.get(
  "/tratamientos/:expedienteId",
  (req, res) => {
    tratamientoObstetro.getTratamientosByExpediente(req, res);
  }
);

routerTratamientoObstetro.put(
  `tratamientos/edit/:expedienteId`,
  (req, res) => {
    tratamientoObstetro.modifyTratamientosObstetro(req, res);
  }
);