$(document).ready(function() {
	$("button#button_animate").on('click', function() {
		// Initial animation

		// - Header Size
		$("h1").animate({
			fontSize: "400%"
		}, 1000);

		$("h2").animate({
			fontSize: "300%"
		}, 1000);

		// - Header Color
		$("h1").css("color", "lightskyblue");

		$("h2").css("color", "steelblue");

		// - Image Border
		$("img").animate({
			borderWidth: "6px"
		}, 1000);

		// After initial animation
		setTimeout(function(){
			
			// - Header Size
			$("h1").animate({
				fontSize: "300%"
			}, 1000);

			$("h2").animate({
				fontSize: "200%"
			}, 1000);

			// - Header Color
			$("h1").css("color", "white");

			$("h2").css("color", "rgb(160, 160, 160)");

			// - Image Border
			$("img").animate({
				borderWidth: "0px"
			}, 1000);
			
		}, 2000);


	});
});