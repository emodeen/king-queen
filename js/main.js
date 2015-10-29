$(document).ready(function(){

	$(".international").on("click",function(){
		$("#slide-down").show();
		$("#politics-drop").hide();
		$("#business-drop").hide();
		$("#technology-drop").hide();
		$("#culture-drop").hide();
		$("#blogs-drop").hide();

		$(this).css("background", "#666");
	});
});