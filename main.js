
songReproducing = 1
function preload() {
    
    song = loadSound('Coldplay_VivaLaVida.mp3');

    
    
    function mousePressed() {
      if (song.isPlaying()) {
        // .isPlaying() retorna una variable booleana
        song.stop();
       
      } else {
        song.play();
       
      }
    }
    
}

function draw() {
  
}
function cargado() {
    console.log("cargado")
}
function setup() {
    
    createCanvas(720, 200);
   
  }
function play() {
   
song.play()

}

function pausar() {
    song.stop()
}
function sig() {
    song.stop()
    songReproducing++
    if (songReproducing == 4) {
        songReproducing = 1
    }
    switch (songReproducing) {
        case 1: song = song1; break
        case 2: song = song2; break
        case 3: song = song3; break
    }   
    song.play()
  

}
function ant() {
    song.stop()
    songReproducing--
    if (songReproducing == 0) {
        songReproducing = 3
    }
    switch (songReproducing) {
        case 1: song = song1; break
        case 2: song = song2; break
        case 3: song = song3; break
    }
    song.play()
}
