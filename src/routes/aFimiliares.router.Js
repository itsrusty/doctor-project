import { Router } from "express";
import aFamiliares from "../models/aFimiliares.model.Js";


const controllerAFamiliares = new aFamiliares();
const routerAFamiliares = Router();
const path = '/antecedentesfamiliares';

routerAFamiliares.get(`${path}/:expedienteId`, (req, res) => {
    controllerAFamiliares.getByExpediente(req, res)
})

routerAFamiliares.post(`${path}/new`, (req, res) => {
    controllerAFamiliares.createAFamiliares(req, res)
})

routerAFamiliares.put(`${path}/edit/:expedienteId`, (req, res) => {
    controllerAFamiliares.modifyAFamiliares(req, res)
})