//laeme failid
var track1 = new Howl({
  id: 1,
  src: ["http://ab.audiohub.rocks/files/1.mp3"]
});
var track2 = new Howl({
  id: 2,
  src: ["http://ab.audiohub.rocks/files/2.mp3"]
});

//määrame globaalsed muutujad
var startButton = document.getElementById("start");
var toggleButton = document.getElementById("toggle");
var stopButton = document.getElementById("stop");
var pauseButton = document.getElementById("pause");
var A = "Mängib klipp A";
var B = "Mängib klipp B";


//funktsioon mis kontrollib kas klipp on laetud
track1.once('load',function(){
  startButton.disabled = false;
  toggleButton.innerHTML = "Seisab";
});

//VANA LAADIMINE
// function laadimine() {
// if (track2.state() == 'loaded') {
//     startButton.disabled = false;
//     toggleButton.innerHTML = "Seisab";
//
//   } else {
//     startButton.disabled = true;
//     toggleButton.innerHTML = "Player laeb faile...";
//   }
// };



//PLAY nupp
startButton.onclick = function() {

  this.disabled = true;
  track1.play();
  track2.play();
  track2.mute();
  toggleButton.disabled = false;
  if (track1.mute() == true) {
    toggleButton.innerHTML = B;
  } else {
    toggleButton.innerHTML = A;
  }
  stopButton.disabled = false;
  pauseButton.disabled = false;



};

//PAUSI nupp
pauseButton.onclick = function() {
  track1.pause();
  track2.pause();
  toggleButton.disabled = true;
  startButton.disabled = false;
  stopButton.disabled = false;
  pauseButton.disavled = true;
  toggleButton.innerHTML = "Player on pausil";
};

//A-B TOGGLE nupp
toggleButton.onclick = function() {
  if (track1.mute() == true) {
    track2.mute(true);
    track1.mute(false);
    toggleButton.innerHTML = A;
  } else {
    track2.mute(false);
    track1.mute(true);
    toggleButton.innerHTML = B;
  }
};

//STOP nupp
stopButton.onclick = function() {
  this.disabled = true;
  track1.stop();
  track2.stop();
  track1.mute(false);
  track2.mute(true);
  startButton.disabled = false;
  pauseButton.disabled = true;
  toggleButton.disabled = true;
  toggleButton.innerHTML = "Seisab";
};



//funktsioon mis taastab loo lõppedes playeri algseaded
track1.on('end', function(){
  startButton.disabled = false;
  stopButton.disabled = true;
  pauseButton.disabled = true;
  toggleButton.innerHTML = "Seisab";
});
