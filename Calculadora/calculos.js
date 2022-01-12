function insert (number) {
    var numero = document.getElementById('visor').innerText;
    document.getElementById('visor').innerText = numero + number;
}

function limpar () {
    document.getElementById('visor').innerText = ''
}

function deletar () {
    var elementos = document.getElementById('visor').innerText;
    document.getElementById('visor').innerText = elementos.substring(0, elementos.length - 1);
}

function calcular () {
    var resultado = document.getElementById('visor').innerText
    if (resultado){
        document.getElementById('visor').innerText = eval(resultado);
    }
}