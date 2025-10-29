module.exports = function (app) {
  app.get('/admin/editar_professor', function (req, res) {
    async function getProfessorPorId() {
      try {
        let id_professor = req.query.id;
        let connection = app.config.dbConnection;
        const pool = await connection();
        let professoresModel = app.models.professormodel;

        professoresModel.getProfessorPorId(id_professor, pool, function (error, results) {
          res.render('admin/editar_professor', { profs: results.recordset });
        });
      } catch (err) {
        console.log(err);
      }
    }

    getProfessorPorId();
  });

  app.post('/professor/editar', function (req, res) {
    async function editarProfessor() {
      try {
        let professor = req.body;

        let connection = app.config.dbConnection;
        const pool = await connection();
        let professoresModel = app.models.professormodel;

        // usando callback para editar os dados do professor
        professoresModel.editarProfessor(professor, pool, (error, results) => {
          if (error) {
            console.log('Erro ao editar no banco: ' + error);
            res.status(500).send(error);
          } else {
            console.log('Professor editado!!!');
            res.redirect('/admin/crud_professores');
          }
        });
      } catch (error) {
        console.log(error);
      }
    }

    editarProfessor();
  });
};
