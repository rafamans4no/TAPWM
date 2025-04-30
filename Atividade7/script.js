function verificarTriangulo() {
    const a = Number(document.getElementById("a").value);
    const b = Number(document.getElementById("b").value);
    const c = Number(document.getElementById("c").value);

    const resultado = document.getElementById("resultado");

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      resultado.innerHTML = "Por favor, insira apenas números válidos.";
      return;
    }

    const cond1 = Math.abs(b - c) < a && a < b + c;
    const cond2 = Math.abs(a - c) < b && b < a + c;
    const cond3 = Math.abs(a - b) < c && c < a + b;

    if (cond1 && cond2 && cond3) {
      if (a === b && b === c) {
        resultado.innerHTML = "É um triângulo <strong>equilátero</strong>.";
      } else if (a === b || b === c || a === c) {
        resultado.innerHTML = "É um triângulo <strong>isósceles</strong>.";
      } else {
        resultado.innerHTML = "É um triângulo <strong>escaleno</strong>.";
      }
    } else {
      resultado.innerHTML = "Os valores informados <strong>não formam</strong> um triângulo.";
    }
}