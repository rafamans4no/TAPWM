const respostas = [];

document.getElementById("formulario").addEventListener("submit", function(event) {
  event.preventDefault();

  const idade = parseInt(document.getElementById("idade").value);
  const sexo = document.getElementById("sexo").value;
  const opiniao = parseInt(document.getElementById("opiniao").value);

  respostas.push({ idade, sexo, opiniao });

  document.getElementById("formulario").reset();

  if (respostas.length >= 10) {
    mostrarResultados();
  } else {
    document.getElementById("resultados").innerHTML = `${respostas.length} resposta(s) registrada(s). Faltam ${10 - respostas.length}.`;
  }
});

function mostrarResultados() {
  const mediaIdade = respostas.reduce((s, p) => s + p.idade, 0) / respostas.length;
  const maisVelha = Math.max(...respostas.map(p => p.idade));
  const maisNova = Math.min(...respostas.map(p => p.idade));
  const pessimo = respostas.filter(p => p.opiniao === 1).length;
  const otimoBom = respostas.filter(p => p.opiniao === 3 || p.opiniao === 4).length;
  const porcentagemOtimoBom = ((otimoBom / respostas.length) * 100).toFixed(2);

  const contagemSexo = { feminino: 0, masculino: 0, outros: 0 };
  respostas.forEach(p => contagemSexo[p.sexo]++);

  document.getElementById("resultados").innerHTML = `
    <h2>Resultados:</h2>
    <p><strong>Média de idade:</strong> ${mediaIdade.toFixed(2)}</p>
    <p><strong>Mais velha:</strong> ${maisVelha} anos</p>
    <p><strong>Mais nova:</strong> ${maisNova} anos</p>
    <p><strong>Quantidade que responderam péssimo:</strong> ${pessimo}</p>
    <p><strong>Porcentagem que responderam ótimo ou bom:</strong> ${porcentagemOtimoBom}%</p>
    <p><strong>Contagem por sexo:</strong> Mulheres: ${contagemSexo.feminino}, Homens: ${contagemSexo.masculino}, Outros: ${contagemSexo.outros}</p>
  `;
}