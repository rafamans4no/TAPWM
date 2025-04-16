function jogar(escolhaUsuario) {
  const opcoes = ['pedra', 'papel', 'tesoura'];
  const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];
  let resultado = "";
  let jogadaComputador = `Computador jogou: ${escolhaComputador}`;
  if (escolhaUsuario === escolhaComputador) {
    resultado = "Empate!";
  } else if (
    (escolhaUsuario === 'pedra' && escolhaComputador === 'tesoura') ||
    (escolhaUsuario === 'papel' && escolhaComputador === 'pedra') ||
    (escolhaUsuario === 'tesoura' && escolhaComputador === 'papel')
  ) {
    resultado = `Você ganhou! ${escolhaUsuario} vence ${escolhaComputador}`;
    //Chuva de prata
    confetti({
      particleCount: 100,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#C0C0C0', '#E0E0E0', '#FFFFFF'] // tons prateados
    });
  } else {
    resultado = `Você perdeu! ${escolhaComputador} vence ${escolhaUsuario}`;
  }
  document.getElementById("resultado").innerHTML = `${jogadaComputador}<br>${resultado}`;
}