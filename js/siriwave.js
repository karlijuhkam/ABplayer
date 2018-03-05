

var startButton = document.getElementById("start");
var toggleButton = document.getElementById("toggle");
var stopButton = document.getElementById("stop");
var pauseButton = document.getElementById("pause");

var siriWave = new SiriWave({
	container: document.getElementById('siri-container'),
  width: 1000,
	height: 100,
	speed: 0.002,
	color: '#ffffff',
	frequency: 9,
  cover: true,
	autostart: true,
  
});

startButton.addEventListener("click", function(){
  siriWave.setSpeed(0.05),
  siriWave.setAmplitude(567);
});
pauseButton.addEventListener("click", function(){
  siriWave.setSpeed(0.005),
  siriWave.setAmplitude(567);
});
stopButton.addEventListener("click", function(){
  siriWave.setSpeed(0.002),
  siriWave.setAmplitude(567);
});


