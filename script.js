alert('Quer jogar um jogo?')
function jogar() {
  var numeroSecreto = parseInt(Math.random() * 1000 + 1);
  console.log(numeroSecreto);
  var numeroDeChutes = 0;
  while(chute != numeroSecreto) {
    var chute = prompt('Digite um número entre 1 e 1000');
    if(chute== null) {
      alert('Jogo cancelado.')
      break;
    } else if(chute== "") {
      alert('Você precisa escolher um número ou cancelar.')
    } else if(chute == numeroSecreto) {
      alert('O número secreto é exatamente ' + numeroSecreto + '! Você acertou depois de ' + numeroDeChutes + ' tentativas.')
    } else if(chute > numeroSecreto) {
      numeroDeChutes++;
      alert('Errou... o número secreto é menor que ' + chute + '. Você já teve ' + numeroDeChutes + ' tentativas.')
    } else if(chute < numeroSecreto) {
      numeroDeChutes++;
      alert('Errou... o número secreto é maior que ' + chute + '. Você já teve ' + numeroDeChutes + ' tentativas.')
    }
  }
}
jogar();