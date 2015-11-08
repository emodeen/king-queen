
// An array of card objects
// Each object contains the card type and whether the face is showing
var cards = [];

// The number of king cards that have been turned over
var numKings = 0;
// The number of queen cards that have been turned over
var numQueens = 0;

// Boolean indicating if the user has clicked 'Start'
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

	// initialize card array objects
	var card1 = {
		faceValue : 'King',
		faceShowing : false
	};

	var card2 = {
		faceValue : 'Queen',
		faceShowing : false
	};

	var card3 = {
		faceValue : 'Queen',
		faceShowing : false
	};

	var card4 = {
		faceValue : 'King',
		faceShowing : false
	};

	// populate the card array
	cards = [card1, card2, card3, card4];

	window.alert("The game has started!");			
}

/* Show the back of all cards */
function reset() {
	$("#pic1").attr('src', 'img/back-of-card.png');
	$("#pic2").attr('src', 'img/back-of-card.png');
	$("#pic3").attr('src', 'img/back-of-card.png');
	$("#pic4").attr('src', 'img/back-of-card.png');

	// reset the card values
	cards.forEach(function(entry) {
		entry.faceShowing = false;
    });
		
	numKings = 0;
	numKings = 0;
}

function checkForMatch(card) {

	// if queen, increment queen count
	if (card === 'Queen') {
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
}

function turn(event) {
	event.preventDefault();

	var whichImg = $(this).attr('id');
	var rank;

	// whether the card clicked on has already been turned
	var alreadyTurned = false;

	if (!gameStarted) {
		window.alert("Please start the game before turning a card.");
	}

	else {
		// check if the card that was turned is a king or queen.
		// then change the image to a king or queen

		if (whichImg === 'pic1') {
			rank = cards[0].faceValue;
			if (cards[0].faceShowing === true) {
				alreadyTurned = true;
			}
			else {
				cards[0].faceShowing = true;
			}
		}

		else if (whichImg === 'pic2') {
			rank = cards[1].faceValue;

			if (cards[1].faceShowing === true) {
				alreadyTurned = true;
			}
			else {
				cards[1].faceShowing = true;
			}			
		}

		else if (whichImg === 'pic3') {
			rank = cards[2].faceValue;

			if (cards[2].faceShowing === true) {
				alreadyTurned = true;
			}
			else {
				cards[2].faceShowing = true;
			}			
		}

		else {
			rank = cards[3].faceValue;

			if (cards[3].faceShowing === true) {
				alreadyTurned = true;
			}
			else {
				cards[3].faceShowing = true;
			}			
		}

		if (!alreadyTurned) {
			$("#"+whichImg+"").attr('src', 'img/'+rank+'.png');
	 		checkForMatch(rank);
	    }
	}
}

$(document).ready(function() {
	$("#primary-nav .international").on("click",start1);
	$(".card").on("click",turn);
	$("#start").on("click",start);
	$("#reset").on("click",reset);
});















