var counter = 3590;
function setup() {
	noCanvas();

	var timer = select('#Timer');
	timer.html(convertSeconds(counter));

	function timeIt(){
		counter++;
		timer.html(convertSeconds(counter));
	}
	setInterval(timeIt, 1000);
}

function convertSeconds(s){
	var hour = floor(s / 3600);
	var minutes = s % 3600;
	var seconds = s % 60;
	return nf(hour, 2) + ':' + nf(minutes, 2) + ':' + nf(seconds, 2);
}