const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const dateEntered = '25 Dec 2024';

function countTimer(){
    const newDayEntered = new Date(dateEntered);
    const currentDate = new Date();

    //La resta devuelve en milisegundos, para pasar a segundos se divide por mil.
    const totalSeconds = (newDayEntered - currentDate) / 1000;

    //Se usa la libreria de Math. Se aplica "floor" para redondear decimales.
    //El calculo devuelve en segundos, para pasar a horas se divide por los segundos por hora, y por las horas del dia.
    const daysCalc = Math.floor(totalSeconds / 3600 / 24);

    //Al dividir por 3600 se obtiene las horas, y para obtener el resto (de 24 horas) se hace % 24
    const hoursCalc = Math.floor(totalSeconds / 3600 % 24);

    //No hace falta convertirlo a horas, se convierte a minutos directamente, y se obtiene el resto de 60 minutos.
    const minutesCalc = Math.floor(totalSeconds / 60) % 60;

    //Se obtiene el resto de 60 directamente, sin convertir a nada.
    const secondsCalc = Math.floor(totalSeconds % 60);

    days.innerHTML = daysCalc;
    hours.innerHTML = hoursCalc;
    minutes.innerHTML = minutesCalc;
    seconds.innerHTML = secondsCalc;
}

// countTimer();

// //Para que el contador muestre el correr de los segundos se aplica a la funcion el tiempo de repeticion por milisegundos
setInterval(countTimer, 1000);