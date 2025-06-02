function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Magreza | Grau 0";
    } else if (imc >= 18.5 && imc <= 24.9) {
        return "Normal | Grau 0";
    } else if (imc >= 25 && imc <= 29.9) {
        return "Sobrepeso | Grau I";
    } else if (imc >= 30 && imc <= 39.9) {
        return "Obesidade | Grau II";
    } else {
        return "Obesidade Grave | Grau III";
    }
}

function calcular() {
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        resultado.innerText = "Por favor, preencha os dados corretamente.";
        return;
    }

    const imc = calcularIMC(peso, altura);
    const classificacao = classificarIMC(imc);

    resultado.innerText = `Seu IMC é: ${imc.toFixed(2)} - ${classificacao}`;
}
