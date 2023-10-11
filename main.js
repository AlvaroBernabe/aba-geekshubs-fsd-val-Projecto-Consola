function iniciarIntro() {
    var video = document.createElement("video");
    video.src = "./intro.mp4";
    video.autoplay = true; 
    var lcd = document.querySelector(".lcd");
    lcd.innerHTML = "";
    lcd.appendChild(video);
};

document.getElementById('brillo').addEventListener('click', cambiarBrillo);
let nivelBrillo = 0;


function cambiarBrillo() {
    const lcd = document.querySelector('.lcd');
    
    nivelBrillo++;
    if (nivelBrillo > 3) {
        nivelBrillo = 1;
    }

    switch (nivelBrillo) {
        case 1:
            lcd.style.filter = "brightness(100%)";
            break;
        case 2:
            lcd.style.filter = "brightness(150%)";
            break;
        case 3:
            lcd.style.filter = "brightness(200%)";
            break;
        default:
            lcd.style.filter = "brightness(100%)";
            break;
    }
}

document.querySelector('.bt-luz').addEventListener('click', function() {
    var brilloIcono = document.getElementById('brillo');
    brilloIcono.classList.toggle('iluminado');
    
    if(brilloIcono.classList.contains('iluminado')) {
        brilloIcono.src = './img/icono-brillo-amarillo.png';
    } else {
        brilloIcono.src = './img/icono-brillo.png';
    }
    console.log("Brillo icono on");
});