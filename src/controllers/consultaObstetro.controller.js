
import consultaObstetroModel from "../models/consultaObstetro.models";

export class consultaObstetro {
  async getConsultasObstetro(req, res) {
    try {
      const consultasObstero = await consultaObstetroModel.findAll();

      return consultasObstero.length > 0
        ? res.status(200).json({ messaje: consultasObstero, details: true })
        : res
            .status(400)
            .json({ messaje: "No existen consultas", details: false });
    } catch (error) {
      res.status(500).json({ errorResponse: error })    }
  }

  async getAntecedentesPatients(req, res) {
    try {
      const { expedienteId } = req.params;
      const antecedentes = await consultaObstetroModel.findAll({
        where: {
          expediente_id: expedienteId,
        },
      }); 

      antecedentes
        ? res.status(200).json({ message: antecedentes, details: true })
        : res
            .status(400)
            .json({ message: "the user has no background", details: false });
    } catch (error) {
      res.status(500).json({ errorResponse: error })    }
  }

  async createConsultaObstetro(req, res) {
    try {
      const {
        expediente_id,
        no,
        fecha,
        mareos,
        nauseas,
        vomito,
        flujo,
        sxUrin,
        mFetale,
        otros,
      } = req.body;

      const data = {
        expediente_id,
        no,
        fecha,
        mareos,
        nauseas,
        vomito,
        flujo,
        sxUrin,
        mFetale,
        otros,
      };

      const created = await consultaObstetroModel.create(data);

      created
        ? res
            .status(200)
            .json({ message: "consult created" + data, details: true })
        : res
            .status(400)
            .json({ message: "error al crear", datails: false });
    } catch (error) {
      res.status(500).json({ errorResponse: error })    }
  }

  async modifyConsultObstetro(req, res){
    try{
      const {expedienteId} = req.params
      const data= req.body
      //revisar datos vacios
      const ConsultUpdate= await consultaObstetroModel.update(data,{
        where:{
          expediente_id :expedienteId
        },
        returning:true
      });

      ConsultUpdate
      ?res.send(200).json({message:ConsultUpdate, details:true})
      :res.send(400).json({message:'internal error', details:false})


    }catch(error){
      res.json(500).json({errorResponse:error})
    }
  }
}
