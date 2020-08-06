window.onload = function() {
	
}

var updateFunction;

function playAudio(argument, caller) {
	caller.onclick = function() {
		pauseAudio(argument, caller);
	};
	updateFunction = setInterval(function() {
		updateAudioTime(1)
	}, 100);
	document.getElementById(argument).play();
}
	

function pauseAudio(argument, caller) {
	caller.onclick = function() {
		playAudio(argument, caller);
	};
	clearInterval(updateFunction);
	document.getElementById(argument).pause();
}

var minutes;
var seconds = 0;

function updateAudioTime(argument) {
	minutes = document.getElementById(argument).currentTime / 60;
	seconds = document.getElementById(argument).currentTime - (60 * Math.floor(minutes));
	if(seconds >= 60) {
		seconds = 0;
	}
	document.getElementById("sermonTime").innerHTML = "0:" + Math.floor(minutes) + ":" + seconds.toFixed(0);
}