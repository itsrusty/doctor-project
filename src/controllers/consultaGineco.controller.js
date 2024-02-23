
import consultginecoModels  from "../models/consultaGineco.model";

export class consultaGineco {
    async updateConsult(req, res) {
        try {
            const { no, fecha, motivo, padecimiento } = req.body;

            const consultData = {
                no,
                fecha,
                motivo,
                padecimiento,

            };


            const  [ created ] = await consultginecoModels.findOrCreate({ 
                where: {
                    no: no,
                    fecha: fecha,
                    motiva: motivo,
                    padecimiento: padecimiento,
                },
                defaults: {
                    consultData
                }
             });

            if(created) {
                return res.json({
                    messsage: "the consult already exist",
                    details: consultData
                })
            }



        } catch (error) {
            res.status(500).json({ errorResponse: error })}
    }
}
