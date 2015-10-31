$(document).ready(function(){

	$("#primary-nav .international").on("click",function(event){

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
	});

	$("#primary-nav .politics").on("click",function(event){
		event.preventDefault();
		$("#primary-nav .politics").siblings().removeClass("active");
		$("#primary-nav .politics").siblings().css("background", "FFF");
		$("#primary-nav .politics").toggleClass("active");

		// If the nav item is active
		if ($("#primary-nav .politics").hasClass("active")) {
			// If content is open
			if($('#slide-down').hasClass('open')) { 

				// .drop.open finds elements within #slide-down that have class drop and class open
				// Hide all other sections, and remove class open for all other sections 
				$('#slide-down .drop.open').hide().removeClass('open');

				// Add open class to all elements having both class drop and class politics
				$('.drop.politics').show().addClass('open');
			} 

			// If the content is not open
			else { 

				// Hide sections with class drop
				$('#slide-down .drop').hide();

				// Add class open to politics section
				$('.drop.politics').show().addClass('open');

				// Slide down content, and add class open to the section div
				$('#slide-down').slideDown(150).addClass('open');			
			}
		}

		// If the nav item is not active		
		else {
			$("#slide-down").slideUp().removeClass('open');
			
			$('#slide-down .drop.open').removeClass('open');
		}
	});

	$("#primary-nav .business").on("click",function(event){
		event.preventDefault();
		$("#primary-nav .business").siblings().removeClass("active");
		$("#primary-nav .business").siblings().css("background", "FFF");
		$("#primary-nav .business").toggleClass("active");

		// If the nav item is active
		if ($("#primary-nav .business").hasClass("active")) {
			// If content is open
			if($('#slide-down').hasClass('open')) { 

				// .drop.open finds elements within #slide-down that have class drop and class open
				// Hide all other sections, and remove class open for all other sections 
				$('#slide-down .drop.open').hide().removeClass('open');

				// Add open class to all elements having both class drop and class business
				$('.drop.business').show().addClass('open');
			} 

			// If the content is not open
			else { 

				// Hide sections with class drop
				$('#slide-down .drop').hide();

				// Add class open to business section
				$('.drop.business').show().addClass('open');

				// Slide down content, and add class open to the section div
				$('#slide-down').slideDown(150).addClass('open');			
			}
		}

		// If the nav item is not active		
		else {
			$("#slide-down").slideUp().removeClass('open');
			
			$('#slide-down .drop.open').removeClass('open');
		}
	});

	$("#primary-nav .technology").on("click",function(event){
		event.preventDefault();
		$("#primary-nav .technology").siblings().removeClass("active");
		$("#primary-nav .technology").siblings().css("background", "FFF");
		$("#primary-nav .technology").toggleClass("active");

		// If the nav item is active
		if ($("#primary-nav .technology").hasClass("active")) {
			// If content is open
			if($('#slide-down').hasClass('open')) { 

				// .drop.open finds elements within #slide-down that have class drop and class open
				// Hide all other sections, and remove class open for all other sections 
				$('#slide-down .drop.open').hide().removeClass('open');

				// Add open class to all elements having both class drop and class technology
				$('.drop.technology').show().addClass('open');
			} 

			// If the content is not open
			else { 

				// Hide sections with class drop
				$('#slide-down .drop').hide();

				// Add class open to technology section
				$('.drop.technology').show().addClass('open');

				// Slide down content, and add class open to the section div
				$('#slide-down').slideDown(150).addClass('open');			
			}
		}

		// If the nav item is not active		
		else {
			$("#slide-down").slideUp().removeClass('open');
			
			$('#slide-down .drop.open').removeClass('open');
		}
	});

	$("#primary-nav .culture").on("click",function(event){
		event.preventDefault();
		$("#primary-nav .culture").siblings().removeClass("active");
		$("#primary-nav .culture").siblings().css("background", "FFF");
		$("#primary-nav .culture").toggleClass("active");

		// If the nav item is active
		if ($("#primary-nav .culture").hasClass("active")) {
			// If content is open
			if($('#slide-down').hasClass('open')) { 

				// .drop.open finds elements within #slide-down that have class drop and class open
				// Hide all other sections, and remove class open for all other sections 
				$('#slide-down .drop.open').hide().removeClass('open');

				// Add open class to all elements having both class drop and class culture
				$('.drop.culture').show().addClass('open');
			} 

			// If the content is not open
			else { 

				// Hide sections with class drop
				$('#slide-down .drop').hide();

				// Add class open to culture section
				$('.drop.culture').show().addClass('open');

				// Slide down content, and add class open to the section div
				$('#slide-down').slideDown(150).addClass('open');			
			}
		}

		// If the nav item is not active		
		else {
			$("#slide-down").slideUp().removeClass('open');
			
			$('#slide-down .drop.open').removeClass('open');
		}
	});

	$("#primary-nav .blogs").on("click",function(event){
		event.preventDefault();
		$("#primary-nav .blogs").siblings().removeClass("active");
		$("#primary-nav .blogs").siblings().css("background", "FFF");
		$("#primary-nav .blogs").toggleClass("active");

		// If the nav item is active
		if ($("#primary-nav .blogs").hasClass("active")) {
			// If content is open
			if($('#slide-down').hasClass('open')) { 

				// .drop.open finds elements within #slide-down that have class drop and class open
				// Hide all other sections, and remove class open for all other sections 
				$('#slide-down .drop.open').hide().removeClass('open');

				// Add open class to all elements having both class drop and class blogs
				$('.drop.blogs').show().addClass('open');
			} 

			// If the content is not open
			else { 

				// Hide sections with class drop
				$('#slide-down .drop').hide();

				// Add class open to blogs section
				$('.drop.blogs').show().addClass('open');

				// Slide down content, and add class open to the section div
				$('#slide-down').slideDown(150).addClass('open');			
			}
		}

		// If the nav item is not active		
		else {
			$("#slide-down").slideUp().removeClass('open');
			
			$('#slide-down .drop.open').removeClass('open');
		}
	});

});