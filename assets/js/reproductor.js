var reproduccion = document.getElementById("miMusica")

function play(){
    reproduccion.play();
};
function advance(){
    reproduccion.currentTime += 0;
};
function back(){
    reproduccion.currentTime -= 0;
};
function pause(){
    reproduccion.pause()
};
function stop(){
    reproduccion.currentTime = 0;
};
function volPlus(){
    reproduccion.volume += 0.2;
};
function volLess(){
    reproduccion.volume -= 0.2;
};
function progreso() {
    var rango =  document.getElementById("barra")
      rango.value = reproduccion.currentTime;
};
