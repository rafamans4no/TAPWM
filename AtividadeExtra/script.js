function SomaQuadrados() {
    const input = document.getElementById("numerosInput").value;
    const numeros = input.split(',').map(Number);
  
    if (numeros.length !== 3 || numeros.some(isNaN)) {
      document.getElementById("resultado1").innerText = "Por favor, insira exatamente 3 números válidos.";
      return;
    }
    const soma = numeros.reduce((acc, val) => acc + val, 0);
    const quadrado1 = Math.pow.apply(null, [numeros[0], 2]);
    const quadrado2 = Math.pow.apply(null, [numeros[1], 2]);
  
    document.getElementById("resultado1").innerText =
      `A soma dos três números é: ${soma}, \n o quadrado do primeiro é: ${quadrado1}\n e o quadrado do segundo é: ${quadrado2}`;
  }
  
  function gerarPalavras() {
    const input = document.getElementById("letrasInput").value.toUpperCase();
    const letras = input.split(',').map(l => l.trim()).filter(Boolean);
  
    if (letras.length !== 5 || letras.some(l => !/^[A-Z]$/.test(l))) {
      document.getElementById("resultado2").innerText = "Digite exatamente 5 letras válidas (A-Z).";
      return;
    }
  
    const palavras = [];
    function gerarPalavra() {
      let palavra = '';
      for (let i = 0; i < 5; i++) {
        const idx = Math.floor(Math.random() * letras.length);
        palavra += letras[idx];
      }
      return palavra;
    }
  
    while (palavras.length < 10) {
      const nova = gerarPalavra();
      if (!palavras.includes(nova)) {
        palavras.push.apply(palavras, [nova]);
      }
    }
    document.getElementById("resultado2").innerText = palavras.join(', ');
  }
  