function objetoLiteral() {
    const Funcionario1 = {
        matricula: "001",
        nome: "Rafaela Mansano",
        funcao: "Analista de Projetos"
    };

    exibirResultado("Objeto Literal", Funcionario1);
}

function objetoNewObject() {
    const Funcionario1 = new Object();
    Funcionario1.matricula = "002";
    Funcionario1.nome = "Ana Luiza Silva";
    Funcionario1.funcao = "Designer UX/UI";

    exibirResultado("new Object()", Funcionario1);
}

function objetoConstrutor() {
    function Funcionario(matricula, nome, funcao) {
        this.matricula = matricula;
        this.nome = nome;
        this.funcao = funcao;
    }

    const Funcionario1 = new Funcionario("003", "Nicolly Lemos", "Desenvolvedora Web");

    exibirResultado("Função Construtora", Funcionario1);
}

function exibirResultado(tipo, objeto) {
    const resultado = document.getElementById("resultado");
    resultado.innerText = `Forma: ${tipo}\n\n` +
        `Matrícula: ${objeto.matricula}\n` +
        `Nome: ${objeto.nome}\n` +
        `Função: ${objeto.funcao}`;
}
