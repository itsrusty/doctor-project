
import datosAdicionalesModel from "../models/datosAdicionales.model";

export class datosAdicionales {
  async getDatosAdicionales(req, res) {
    try {
      const { expedienteId } = req.params;

      const datosAdicionales = await datosAdicionalesModel.findOne({
        where: {
          expediente_id: expedienteId,
        },
      });

      datosAdicionales
        ? res.status(200).json({ message: datosAdicionales, details: true })
        : res
            .status(400)
            .json({ message: "no posee datos adicionales", details: false });
    } catch (error) {
      res.status(500).json({ errorResponse: error });
    }
  }

  async createDatosAdicionales(req, res) {
    try {
      const {
        expediente_id,
        religion,
        escolaridad,
        trabaja,
        trabajo,
        adicciones,
        info_adicional,
      } = req.body;

      const dataDatosAdicionales = {
        expediente_id,
        religion,
        escolaridad,
        trabaja,
        trabajo,
        adicciones,
        info_adicional,
      };

      const created = await datosAdicionalesModel.create({
        dataDatosAdicionales,
      });

      created
        ? res
            .status(200)
            .json({
              message: "datos adicionales del paciente creados",
              details: true,
            })
        : res.status(400).json({ message: "error al crear", detalis: false });
    } catch (error) {
      console.log(error);
    }
  }

  async modifyDatosAdicionales(req, res) {
    try {
      const { expedienteId } = req.params;
      const data = req.body;
      //revisar datos vacios
      const ConsultUpdate = await datosAdicionalesModel.update(data, {
        where: {
          expediente_id: expedienteId,
        },
        returning: true,
      });

      ConsultUpdate
        ? res.send(200).json({ message: ConsultUpdate, details: true })
        : res.send(400).json({ message: "internal error", details: false });
    } catch (error) {
      res.json(500).json({ errorResponse: error });
    }
  }
}