var cards = [];
var gameStarted = false;

function start1(event) {
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

function start() {
	gameStarted = true;
}

/* Show the back of all cards */
function reset() {
	$("#pic1").attr('src', 'img/back-of-card.png');
	$("#pic2").attr('src', 'img/back-of-card.png');
	$("#pic3").attr('src', 'img/back-of-card.png');
	$("#pic4").attr('src', 'img/back-of-card.png');

	// empty the cards array	
}

function checkForMatch(card) {

	var numKings = 0;
	var numQueens = 0;

	cards.push(card);

	cards.forEach(function(entry) {
		// if queen, increment queen count
		if (entry === 'queen') {
			numQueens++;
		}
		// else, increment king count
		else {
			numKings++;
		}

		// check if there is a match
		if ((numQueens === 2) || (numKings === 2)) {
			// inform user that they found a match
			window.alert("You found a match!");
		}
    });
}

function turn(event) {
	event.preventDefault();

	var whichImg = $(this).attr('id');
	var card = 'queen';

	if (!gameStarted) {
		window.alert("Please start the game before turning a card.");
		break;
	}

	if (card === 'queen') {
		$("#"+whichImg+"").attr('src', 'img/Queen.png');
	}

	else {
		$("#"+whichImg+"").attr('src', 'img/King.png');
	}

	checkForMatch(card);
}

$(document).ready(function() {
	$("#primary-nav .international").on("click",start1);
	$(".card").on("click",turn);
	$("#start").on("click",start);
	$("#reset").on("click",reset);
});















