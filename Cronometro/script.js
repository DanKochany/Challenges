let horas = 0;
let minutos = 0;
let segundos = 0;

var tempo = 1000;
var cron;

function start () {
    cron = setInterval(() => {timer (); }, tempo);
}

function pause () {
    clearInterval(cron);
}

function stop () {
    clearInterval(cron);
    minutos = 0;
    segundos = 0;
    horas = 0;

    document.getElementById('counter').innerText = '00:00:00'
}

function timer() {
    segundos++

    if (segundos === 60) {
        segundos = 0;
        minutos++
        if (minutos === 60) {
            minutos = 0;
            horas++
        }
    }

    var format = '0'+ horas + ':' + (minutos < 10 ? '0' + minutos : minutos) 
    + ':' + ( segundos < 10 ? '0' + segundos : segundos)
    document.getElementById('counter').innerText = format
}


