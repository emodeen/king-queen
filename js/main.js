$(document).ready(function(){

	$("#page-header .international").on("click",function(event){

		event.preventDefault();
		$("#page-header .international").siblings().removeClass("active");
		$("#page-header .international").toggleClass("active");

		if ($(".international").hasClass("active")) {

			$("#slide-down").slideDown();
			$("#politics-drop").hide();
			$("#business-drop").hide();
			$("#technology-drop").hide();
			$("#culture-drop").hide();
			$("#blogs-drop").hide();
			$(this).css("background", "#666");
		}
		else {
			$("#slide-down").slideUp();
			$(this).css("background", "#FFF");			
		}
	});

	$("#page-header .politics").on("click",function(event){

		event.preventDefault();
		$("#page-header .politics").siblings().removeClass("active");
		$("#page-header .politics").toggleClass("active");		

		if ($(".politics").hasClass("active")) {
			$(".politics").removeClass("active");
			$("#slide-down").slideUp();
			$(this).css("background", "#FFF");
		}
		else {
			$("#slide-down").slideDown();
			$("#politics-drop").show();
			$("#international-drop").hide();
			$("#business-drop").hide();
			$("#technology-drop").hide();
			$("#culture-drop").hide();
			$("#blogs-drop").hide();
			$(this).css("background", "#666");
			$(".politics").addClass("active");			
		}
	});

});