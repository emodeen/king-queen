$(document).ready(function(){

	$(".international").on("click",function(){

		if ($(".international").hasClass("active")) {
			
			$(".international").removeClass("active");
			$("#slide-down").hide();
			$(this).css("background", "#FFF");
			console.log("has class active");
		}

		else {
			$("#slide-down").show();
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