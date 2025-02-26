function sortear() {
  let quantidade = parseInt(document.getElementById('quantidade').value);
  let de = parseInt(document.getElementById('de').value);
  let ate = parseInt(document.getElementById('ate').value);

  if (de >= ate) {
    alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
    return;
  }

  if (quantidade > (ate - de + 1)) {
    alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
    return;
  }

  let sorteados = [];

  for (let i = 0; i < quantidade; i++) {
    let numero = obterNumeroAleatorio(de, ate);

    while (sorteados.includes(numero)) {
      numero = obterNumeroAleatorio(de, ate);
      alert('Tentando obter número inédito');
    }

    sorteados.push(numero);
  }

  let resultado = document.getElementById('resultado');
  resultado.textContent = `Números sorteados: ${sorteados.join(', ')}`;
}

function obterNumeroAleatorio(de, ate) {
  return Math.floor(Math.random() * (ate - de + 1)) + de;
}
