let tempo = 10;
let seg = 0;
let min = 0;
let hr = 0;
let contar;

const botaoIniciaPausa = document.getElementById('botao')
const contador = document.getElementById('counter')


function iniciaPausa () {
  if (botaoIniciaPausa.firstChild.data === 'Iniciar') {
    botaoIniciaPausa.firstChild.data = "Pausar"
    botaoIniciaPausa.classList.add('yellow')
    botaoIniciaPausa.classList.remove('botao-1')
  } else {
    botaoIniciaPausa.firstChild.data = "Iniciar"
    botaoIniciaPausa.classList.add('botao-1')
    botaoIniciaPausa.classList.remove('yellow')
  }
}

botaoIniciaPausa.addEventListener('click', iniciaPausa);




function iniciar() {
  if (botaoIniciaPausa.firstChild.data === "Iniciar") {
    contar = setInterval (() => {avancar(); }, tempo) 
  } else {
    clearInterval(contar)
  }
}

function avancar () {
  seg++
  if (seg === 60) {
    seg = 00;
    min++
    if (min === 60) {
      min = 00;
      hr++
    }
  }
  let formato = (hr < 10 ? '0'+hr : hr)+':'+(min < 10 ? '0'+min : min)+':'+(seg < 10 ? '0'+seg : seg);
  contador.innerText = formato
}

function reset () {
  contador.innerText = '00:00:00'
  seg = 0;
  min = 0;
  hr = 0;
  
  clearInterval(contar)
}

