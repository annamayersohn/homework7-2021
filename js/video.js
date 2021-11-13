var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	console.log(video.currentTime);
	document.querySelector("#volume").innerHTML = document.querySelector("#slider").value + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	console.log(video.currentTime);
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Old speed is " + video.playbackRate);
	video.playbackRate *= 0.95;
	console.log("New speed is " + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Old speed is " + video.playbackRate);
	video.playbackRate /= .95;
	console.log("New speed is " + video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Original location " + video.currentTime)
	if (video.currentTime + 15 >= video.duration) {
		video.currentTime = 0;
	} else {
		video.currentTime += 15;
	};
	console.log("New location " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (this.innerHTML == "Mute") {
		this.innerHTML = "Unmute";
		video.muted = true;
		console.log("Muted");
	} else {
		this.innerHTML="Mute";
		video.muted = false;
		console.log("Unmuted");
	};
})

document.querySelector("#slider").addEventListener("change", function() {
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = this.value + "%";
	console.log(this.value / 100);
})

document.querySelector("#vintage").addEventListener("click", function() {
	video.className = "video oldSchool";
	console.log("Style: Old School");
})

document.querySelector("#orig").addEventListener("click", function() {
	video.className = "video";
	console.log("Style: Original");
})