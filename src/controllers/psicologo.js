const { Psicologo, Paciente } = require("../models")

module.exports = {
  getAll: async (req, res) => {
    const psicologos = await Psicologo.findAll({
    include: Paciente.pac_name,
    });

    res.json(psicologos);
  },

  getById: async (req, res) => {
    const { params: { id }, } = req;
    const psicologo = await Psicologo.findByPk(id);

    if (psicologo) {
      return res.json(psicologo);
    }

    res.statusCode = 404;
    res.json( { message: 'Psicologo não encontrado'});

  },
  store: async (req, res) => {
    try {
      const { body: { psi_name, psi_email, psi_senha, psi_apresentacao } } = req;
      
      const novoPsicologo = await Psicologo.create({
        psi_name,
        psi_email,
        psi_senha,
        psi_apresentacao
      });

      res.json(novoPsicologo);
    } catch (error) {
      console.log(error.message);
      res
        .status(500)
        .json({ erro: "Erro ao cadastrar Psicologo, tente novamente."});
    }
  },

  update: async (req, res) => {

      const { 
        params: { id },
        body: { psi_name, psi_email, psi_senha, psi_apresentacao },
      } = req;

      const psicologo = await Psicologo.findByPk(id);

      if (!psicologo) {
        res
        .status(404)
        .json({ erro: "Psicologo não encontrado."});
      }
      
      await Psicologo.update({ psi_name, psi_email, psi_senha, psi_apresentacao}, { where: { id }});

      const psicologoAtualizado = await Psicologo.findByPk(id);

      res.json(psicologoAtualizado);
 },

 destroy: async (req, res) => {

  const { id } = req.params;    

  const psicologo = await Psicologo.findByPk(id);

  if (!psicologo) {
    res
    .status(404)
    .json({ erro: "Psicologo não encontrado."});
  }
  
  await psicologo.destroy();

  res.json({ erro: "Psicologo Apagado."});
},


}