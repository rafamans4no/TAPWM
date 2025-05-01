let tipoSelecionado = null;

function atualizarCampos(tipo) {
    tipoSelecionado = tipo;
    const entradas = document.getElementById("entradas");
    entradas.innerHTML = "";

    if (tipo === 1 || tipo === 2) {
        entradas.innerHTML = `
            <input type="number" id="num1" placeholder="Número 1">
            <input type="number" id="num2" placeholder="Número 2">
            <input type="number" id="num3" placeholder="Número 3">`;
    } else if (tipo === 3) {
        entradas.innerHTML = `<input type="text" id="texto" placeholder="Digite a frase">`;
    } else if (tipo === 4) {
        entradas.innerHTML = `
            <input type="text" id="palavra1" placeholder="Palavra 1">
            <input type="text" id="palavra2" placeholder="Palavra 2">`;
    }
}

function executarFuncao() {
    let resultado = "";

    if (tipoSelecionado === 1) {
        const a = Number(document.getElementById("num1").value);
        const b = Number(document.getElementById("num2").value);
        const c = Number(document.getElementById("num3").value);
        resultado = `Maior número: ${Math.max(a, b, c)}`;
    } else if (tipoSelecionado === 2) {
        const a = Number(document.getElementById("num1").value);
        const b = Number(document.getElementById("num2").value);
        const c = Number(document.getElementById("num3").value);
        resultado = `Ordem crescente: ${[a, b, c].sort((x, y) => x - y).join(", ")}`;
    } else if (tipoSelecionado === 3) {
        const texto = document.getElementById("texto").value.toLowerCase().replace(/\s+/g, '');
        const invertido = texto.split('').reverse().join('');
        resultado = texto === invertido ? "É palíndromo" : "Não é palíndromo";
    } else if (tipoSelecionado === 4) {
        const p1 = document.getElementById("palavra1").value;
        const p2 = document.getElementById("palavra2").value;
        if (!p1 || !p2) {
            resultado = "Erro: campos vazios";
        } else {
            resultado = p1.includes(p2) ? "É um subconjunto" : "Não é um subconjunto";
        }
    } else {
        resultado = "Selecione uma função.";
    }

    document.getElementById("resultado").innerText = resultado;
}