import aFamiliaresModel from "../models/aFamiliares.model"


export class aFamiliares {
    async getbyExpendiente(req, res) {
        try {
            const { expedienteId } = req.params

            const aFamiliares = await aFamiliaresModel.findAll({
                where: {
                    expediente_id: expedienteId,
                }
            });

            aFamiliares
                ? res.status(200).json({ message: aFamiliares, details: true })
                : res.status(400).json({ message: "no posee antecedentes familiares", details: false });
        } catch (error) {
            res.status(500).json({ errorResponse: error })
        }
    }

    async createAFamiliares(req,res) {
        try {
            const {
                expediente_id,
                hipertension_padre,
                hipertension_madre,
                hipertension_otros,
                diabetes_padre,
                diabetes_madre,
                diabetes_otros,
                gemelos_padre,
                gemelos_madre,
                gemelos_otros,
                cancer_padre,
                cancer_madre,
                cancer_otros,
                otros_enfermedades_padre,
                otros_enfermedades_madre,
                otros_enfermedades_otros,
            } = req.body;

            const dataAFamiliares = {
                expediente_id,
                hipertension_padre,
                hipertension_madre,
                hipertension_otros,
                diabetes_padre,
                diabetes_madre,
                diabetes_otros,
                gemelos_padre,
                gemelos_madre,
                gemelos_otros,
                cancer_padre,
                cancer_madre,
                cancer_otros,
                otros_enfermedades_padre,
                otros_enfermedades_madre,
                otros_enfermedades_otros,
            }

            const created = await aFamiliaresModel.create({ dataAFamiliares })

            created
                ? res.status(200).json({ message: "antecedentes familiares creados " + dataAFamiliares, details: true })
                : res.status(400).json({ message: "error al crear", details: false })

        } catch (error) {
            res.status(500).json({ errorResponse: error })
        }
    }

    async modifyAFamiliares(req,res) {
        try {
            const { expedienteId } = req.params
            const updatedData = req.body

            const aFamiliares = await aFamiliaresModel.update(updatedData, {
                where: {
                    expediente_id: expedienteId
                },
                returning: true,
            })

            aFamiliares
                ? res.status(200).json({ message: updatedData, details: true })
                : res.status(404).json({ message: 'error internal', details: false })

        } catch (error) {
            res.status(500).json({ errorResponse: error })
        }
    }
}