



function faculty_images_slideshow1(){
	
var $active1 = $("#images_array1 .active1");

var $next1 = ($("#images_array1 .active1").next().length > 0) ? $("#images_array1 .active1").next() : $("#images_array1 img : .active1");


//$("#images_array1").css("background-image","url('../images/headshot-peter-diamandis-e1367525992312.jpg')");
$active1.fadeOut(function(){
	
$active1.removeClass("active1");
$next1.addClass("active1");

});	
	
	
	
}
	
	
	
	
	
	
	








$(document).ready(function(){	
	
	
setInterval("faculty_images_slideshow1()",3000);
	
	
	
	
	
	
	
});