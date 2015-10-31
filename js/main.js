function start(event) {
		event.preventDefault();
		
		$("#primary-nav .international").siblings().removeClass("active");
		$("#primary-nav .international").siblings().css("background", "FFF");
		$("#primary-nav .international").toggleClass("active");

		// If the nav item is active
		if ($("#primary-nav .international").hasClass("active")) {
			// If content is open
			if($('#slide-down').hasClass('open')) { 

				// .drop.open finds elements within #slide-down that have class drop and class open
				// Hide all other sections, and remove class open for all other sections 
				$('#slide-down .drop.open').hide().removeClass('open');

				// Add open class to all elements having both class drop and class international
				$('.drop.international').show().addClass('open');
			} 

			// If the content is not open
			else { 

				// Hide sections with class drop
				$('#slide-down .drop').hide();

				// Add class open to international section
				$('.drop.international').show().addClass('open');

				// Slide down content, and add class open to the section div
				$('#slide-down').slideDown(150).addClass('open');			
			}
		}

		// If the nav item is not active		
		else {
			$("#slide-down").slideUp().removeClass('open');
			
			$('#slide-down .drop.open').removeClass('open');
		}
}

function turnFirst(event) {
	event.preventDefault();
	console.log("turn card");

	$('#pic1').attr('src', 'img/King.png');
}

function turnSecond(event) {
	event.preventDefault();
	console.log("turn card");

	$('#pic2').attr('src', 'img/Queen.png');
}

function turnThird(event) {
	event.preventDefault();
	console.log("turn card");

	$('#pic3').attr('src', 'img/King.png');
}

function turnFourth(event) {
	event.preventDefault();
	console.log("turn card");

	$('#pic4').attr('src', 'img/Queen.png');
}

$(document).ready(function() {
	$("#primary-nav .international").on("click",start);
	$("#pic1").on("click",turnFirst);
	$("#pic2").on("click",turnSecond);
	$("#pic3").on("click",turnThird);
	$("#pic4").on("click",turnFourth);
});















