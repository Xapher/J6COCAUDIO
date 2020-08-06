window.onload = function() {
	
}

var updateFunction;

function playAudio(argument, caller) {


	for (var i = document.getElementsByTagName("button").length - 1; i >= 0; i--) {
		if(document.getElementsByTagName("button")[i].onclick.toString().includes("pause")) {
			document.getElementsByTagName("button")[i].onclick();
		}
	}	

	currentButton = caller;

	caller.onclick = function() {
		pauseAudio(argument, caller);
	};
	updateFunction = setInterval(function() {
		updateAudioTime(argument)
	}, 100);
	document.getElementById(argument).play();
	
}

var currentButton;

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
	document.getElementById("sermonTime" + argument).innerHTML = "0:" + Math.floor(minutes) + ":" + Math.floor(seconds);
}