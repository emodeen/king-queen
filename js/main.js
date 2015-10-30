$(document).ready(function(){

	$("#page-header .international").on("click",function(event){

		event.preventDefault();

		if ($(".international").hasClass("active")) {
			
			$(".international").removeClass("active");
			$("#slide-down").slideUp();
			$(this).css("background", "#FFF");
		}

		else {
			$("#slide-down").slideDown();
			$("#politics-drop").hide();
			$("#business-drop").hide();
			$("#technology-drop").hide();
			$("#culture-drop").hide();
			$("#blogs-drop").hide();

			$(this).css("background", "#666");

			$(".international").addClass("active");			
		}


	});
});