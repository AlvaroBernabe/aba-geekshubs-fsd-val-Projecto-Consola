function iniciarIntro() {
    var video = document.createElement("video");
    video.src = "../media/intro.mp4";
    video.autoplay = true; 
    var lcd = document.querySelector(".lcd");
    lcd.innerHTML = "";
    lcd.appendChild(video);
}