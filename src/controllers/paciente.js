const { Paciente } = require("../models")

module.exports = {
  getAll: async (req, res) => {
    const pacientes = await Paciente.findAll();

    res.json(pacientes);
  },

  getById: async (req, res) => {
    const { params: { id }, } = req;
    const paciente = await Paciente.findByPk(id);

    if (paciente) {
      return res.json(paciente);
    }

    res.statusCode = 404;
    res.json( { message: 'Paciente não encontrado'});

  },
  store: async (req, res) => {
    try {
      const { body: { pac_name, pac_email, pac_nascimento } } = req;
      
      const novoPaciente = await Paciente.create({
        pac_name,
        pac_email,
        pac_nascimento
      });

      res.json(novoPaciente);
    } catch (error) {
      console.log(error.message);
      res
        .status(500)
        .json({ erro: "Erro ao cadastrar Paciente, tente novamente."});
    }
  },

  update: async (req, res) => {

      const { 
        params: { id },
        body: { pac_name, pac_email, pac_nascimento },
      } = req;

      const paciente = await Paciente.findByPk(id);

      if (!paciente) {
        res
        .status(404)
        .json({ erro: "Paciente não encontrado."});
      }
      
      await Paciente.update({ pac_name, pac_email, pac_nascimento}, { where: { id }});

      const pacienteAtualizado = await Paciente.findByPk(id);

      res.json(pacienteAtualizado);
 },

 destroy: async (req, res) => {

  const { id } = req.params;    

  const paciente = await Paciente.findByPk(id);

  if (!paciente) {
    res
    .status(404)
    .json({ erro: "Paciente não encontrado."});
  }
  
  await paciente.destroy();

  res.json({ erro: "Paciente Apagado."});
},


}