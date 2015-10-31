$(document).ready(function(){

	$("#primary-nav .international").on("click",function(event){

		event.preventDefault();
		$("#primary-nav .international").siblings().removeClass("active");
		$("#primary-nav .international").siblings().css("background", "FFF");
		$("#primary-nav .international").toggleClass("active");

		if ($("#primary-nav .international").hasClass("active")) {
			$("#slide-down").slideDown();
			$("#international-drop").show();
			$("#politics-drop").hide();
			$("#business-drop").hide();
			$("#technology-drop").hide();
			$("#culture-drop").hide();
			$("#blogs-drop").hide();
			$("#primary-nav .international").css("background", "#666");
		}
		else {
			$("#slide-down").slideUp();
			$("#primary-nav .international").css("background", "#FFF");			
		}
	});

	$("#primary-nav .politics").on("click",function(event){

		event.preventDefault();
		$("#primary-nav .politics").siblings().removeClass("active");
		$("#primary-nav .politics").siblings().css("background", "FFF");
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