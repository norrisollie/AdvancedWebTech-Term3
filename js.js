var video_one = document.getElementById('video_one'),
	video_two = document.getElementById('video_two'),
	video_one_wrapper = document.getElementById('video_one_wrapper'),
	video_two_wrapper = document.getElementById('video_two_wrapper'),
	play_button = document.getElementById('play_button');

	// add event listener to play button
	play_button.addEventListener('click', play_videos);

	// run function on click
	function play_videos() {
		video_one.play();
		video_two.play();
	}

	var switch_button = document.getElementById('switch_button');

	switch_button.addEventListener('click', switch_videos);

	function switch_videos() {
		console.log('click');

		if(video_one_wrapper.classList.contains('video_active')) {
			console.log('it contains');
			video_one_wrapper.classList.remove('video_active');
			video_two_wrapper.classList.add('video_active');
		} else if(video_two_wrapper.classList.contains('video_active')) {
			video_two_wrapper.classList.remove('video_active');
			video_one_wrapper.classList.add('video_active');
			console.log('it doesnt')
		}
	}

	video_one.addEventListener("timeupdate", message_one);
	video_two.addEventListener("timeupdate", message_two);

	var message_one = document.getElementById("message_one"),
		message_two = document.getElementById("message_two");


	function message_one() {
		// if time between 10s and 20s
		if (this.currentTime > 5 && this.currentTime < 10) {
    		message_one.classList.remove("message_hide");
 		}
 		else {
    		message_one.classList.add("message_hide")
 		}
	}

	function message_two() {
		if (this.currentTime > 0 && this.currentTime < 20) {
			message_two.classList.remove("message_hide");
		}
		else {
			message_two.classList.add("message_hide")
		}
	}
