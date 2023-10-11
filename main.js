function iniciarIntro() {
    var video = document.createElement("video");
    video.src = "./intro.mp4";
    video.autoplay = true;

    var lcd = document.querySelector(".lcd");
    lcd.innerHTML = "";
    lcd.appendChild(video);

    var ledArriba = document.querySelector('.led-arriba');

    video.addEventListener('play', function () {
        ledArriba.style.backgroundColor = "rgb(2, 250, 2)";
    });

    video.addEventListener('ended', function () {
        ledArriba.style.backgroundColor = "rgb(114, 172, 75)";
    });
};

document.getElementById('brillo').addEventListener('click', cambiarBrillo);
let nivelBrillo = 0;


function cambiarBrillo() {
    const lcd = document.querySelector('.lcd');
    const brilloIcono = document.getElementById('brillo');

    nivelBrillo++;
    if (nivelBrillo > 3) {
        nivelBrillo = 1;
    }

    switch (nivelBrillo) {
        case 1:
            lcd.style.filter = "brightness(100%)";
            brilloIcono.src = './img/icono-brillo.png';
            break;
        case 2:
            lcd.style.filter = "brightness(150%)";
            brilloIcono.src = './img/icono-brillo-amarillo-medio.png';
            break;
        case 3:
            lcd.style.filter = "brightness(200%)";
            brilloIcono.src = './img/icono-brillo-amarillo-medio-lleno.png';
            break;
        default:
            lcd.style.filter = "brightness(100%)";
            brilloIcono.src = './img/icono-brillo.png';
            break;
    }
}