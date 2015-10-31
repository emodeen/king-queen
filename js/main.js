$(document).ready(function(){

	$("#primary-nav .international").on("click",function(event){

		event.preventDefault();
		$("#primary-nav .international").siblings().removeClass("active");
		$("#primary-nav .international").siblings().css("background", "FFF");
		$("#primary-nav .international").toggleClass("active");

		// If the nav item is active
		if ($("#primary-nav .international").hasClass("active")) {
console.log('international active');
			// If content is open
			if($('#slide-down').hasClass('open')) { 

				// .drop.open finds elements within #slide-down that have class drop and class open
				// Hide all other sections, and remove class open for all other sections 
				$('#slide-down .drop.open').hide().removeClass('open');

				// Add open class to all elements having both class drop and class international
				$('.drop.international').show().addClass('open');

				$('#slide-down').slideUp().removeClass('open');
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

console.log('international not active');			
			$("#slide-down").slideUp().removeClass('open');
			
			$('#slide-down .drop.open').removeClass('open');

			//$("#primary-nav .international").addClass("active");
		}
	});

	$("#primary-nav .politics").on("click",function(event){

		event.preventDefault();
		$("#primary-nav .politics").siblings().removeClass("active");
		
		// see what siblings() is doing here
		$("#primary-nav .politics").siblings(".international").css("background", "FFF");
		$("#international-drop").css("background", "#FFF");
		$("#international-drop").hide();
		$("#primary-nav .politics").toggleClass("active");		

		if ($("#primary-nav .politics").hasClass("active")) {
			$("#slide-down").slideDown();
			$("#politics-drop").show();
			$("#international-drop").hide();
			$("#business-drop").hide();
			$("#technology-drop").hide();
			$("#culture-drop").hide();
			$("#blogs-drop").hide();
			$("#primary-nav .politics").css("background", "#666");
		}
		else {
			$("#slide-down").slideUp();
			$("#primary-nav .politics").css("background", "#FFF");	
		}
	});

});