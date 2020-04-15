function Section1(){
	$("#one").load("me.php");
}
function Section2(){
	$("#two").load("skill.php");
}
$(document).on("submit","#msg",function(e){
	e.preventDefault();
	$.post("correo.php",$("#msg").serialize()).then(function (res) {
		$("#msg").html(res);
	});
});