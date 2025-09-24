let app= require('./app/config/server');
//carregando o módulo do servidor

let rotaHome = require ('./app/routes/home');
rotaHome(app);

let rotaAdicionarUsuario = require ('./app/routes/adicionar_usuario');
rotaAdicionarUsuario(app);

let rotaHistoria = require ('./app/routes/historia');
rotaHistoria(app);

let rotaCursos = require ('./app/routes/cursos');
rotaCursos(app);

app.get('/', function(req, res){
     res.render("home/index");
});
app.get('/formulario_adicionar_usuario', function(req, res){
    res.render("admin/adicionar_usuario");
});
app.get('/informacao/historia', function(req, res){
    res.render("informacao/historia");
});
app.get('/informacao/cursos', function(req, res){
    res.render("informacao/cursos");
});
app.get('/informacao/professores', function(req, res){
    res.render("informacao/professores");
});
app.listen(3000, function(){
    console.log("servidor iniciado");
});