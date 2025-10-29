const sql = require('mssql');

module.exports = function () {
  this.getProfessores = function (connection, callback) {
    new sql.Request(connection)
      .query('SELECT * FROM professores', callback);
  };

  this.getProfessor = function (connection, callback) {
    new sql.Request(connection)
      .query('SELECT * FROM professores WHERE id_professor = 1', callback);
  };

  this.getProfessorPorId = function (id_professor, connection, callback) {
    new sql.Request(connection)
      .input('id_professor', sql.Int, id_professor)
      .query('SELECT * FROM professores WHERE id_professor = @id_professor', callback);
  };

  this.salvarProfessor = function (professor, connection, callback) {
    new sql.Request(connection)
      .input('nome_professor', sql.NVarChar, professor.nome_professor)
      .input('email_professor', sql.NVarChar, professor.email_professor)
      .query(
        `INSERT INTO professores (NOME_PROFESSOR, EMAIL_PROFESSOR)
         VALUES (@nome_professor, @email_professor)`,
        callback
      );
  };

  this.deletarProfessor = function (professor, connection, callback) {
    new sql.Request(connection)
      .input('id_professor', sql.Int, professor.id_professor)
      .query('DELETE FROM professores WHERE ID_PROFESSOR = @id_professor', callback);
  };

  this.editarProfessor = function (professor, connection, callback) {
    new sql.Request(connection)
      .input('nome_professor', sql.NVarChar, professor.nome_professor)
      .input('email_professor', sql.NVarChar, professor.email_professor)
      .input('id_professor', sql.Int, professor.id_professor)
      .query(
        `UPDATE professores
         SET NOME_PROFESSOR = @nome_professor,
             EMAIL_PROFESSOR = @email_professor
         WHERE ID_PROFESSOR = @id_professor`,
        callback
      );
  };

  // ATENÇÃO: o return this deve ficar no final
  return this;
};
