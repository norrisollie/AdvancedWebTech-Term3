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

	video_one.addEventListener("timeupdate", function(){
    if(this.currentTime > 10 && this.currentTime < 20) {
        console.log("something")
    }
});