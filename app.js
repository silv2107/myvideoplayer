var myVideoPlayer = document.getElementById("myVideoPlayer");
var video = myVideoPlayer.querySelector(".video");
var playButton = myVideoPlayer.querySelector(".playButton");
var controls = myVideoPlayer.querySelector(".controls");
var volumeToggle = myVideoPlayer.querySelector(".volumeToggle");
var volumeSlider = myVideoPlayer.querySelector(".volumeSlider");
var rangeFinder = myVideoPlayer.querySelector(".rangeFinder");
var range = document.getElementById("range2");
var preBar = document.querySelector('.preBar');
var currentVolume = 1;

if (navigator.userAgent.indexOf("Chrome") > 0) {
	controls.style.width = (video.offsetWidth - 106) + "px";
} else {
	controls.style.width = video.offsetWidth + "px";
}

video.addEventListener("timeupdate", function(event) {
	var progress = ((video.currentTime * 100) / video.duration);
	range.value = progress.toFixed(2);
	rangeColor(range);
});

range.addEventListener("change", function(event) {
	video.currentTime = video.duration / 100 * range.value;
});

playButton.addEventListener("click", function(event) {
	if (video.paused) {
		video.play();
		playButton.innerHTML = `<i class="fa fa-pause"></i>`;
	} else {
		video.pause();
		playButton.innerHTML = `<i class="fa fa-play"></i>`;
	}
});

volumeToggle.addEventListener("click", function(event) {
	if (video.volume > 0) {
		video.volume = 0;
		volumeToggle.innerHTML = `<i class="fa fa-volume-mute"></i>`;
		volumeSlider.value = 0;
	} else {
		video.volume = currentVolume;
		volumeToggle.innerHTML = `<i class="fa fa-volume-up"></i>`;
		volumeSlider.value = currentVolume;
	}
});

volumeSlider.addEventListener("change", function(event) {
	currentVolume = volumeSlider.value;
	video.volume = currentVolume;
});

// -- RangeFinder --
function rangeColor(input) {
  input.className = input.className.length ? (input.className + ' colorized') : 'colorized';
	preBar.style.width = input.value + '%';

  input.addEventListener('input', function() {
    preBar.style.width = input.value + '%';
  });

  preBar.style.width = input.value + '%';
}

rangeColor(document.getElementById('range2'));
