


function faculty_images_slideshow1(){
	
var $active1 = $("#images_array1 .active1");



var $next1 = ($("#images_array1 .active1").next().length > 0) ? $("#images_array1 .active1").next() : $("#images_array1 : first");
	

	
	

$active1.fadeOut(function(){
	
$active1.removeClass("active1");
$next1.addClass("active1");

});	

}


function faculty_images_slideshow2(){

var $active2 = $("#images_array2 .active2");



var $next2 = ($("#images_array2 .active2").next().length > 0) ? $("#images_array2 .active2").next() : $("#images_array2 : first");
	

	
	

$active2.fadeOut(function(){
	
$active2.removeClass("active2");
$next2.addClass("active2");

});	
	

}

function faculty_images_slideshow3(){

var $active3 = $("#images_array3 .active3");



var $next3 = ($("#images_array3 .active3").next().length > 0) ? $("#images_array3 .active3").next() : $("#images_array3 : first");
	

	
	

$active3.fadeOut(function(){
	
$active3.removeClass("active3");
$next3.addClass("active3");

});	
	

}

function faculty_images_slideshow4(){

var $active4 = $("#images_array4 .active4");



var $next4 = ($("#images_array4 .active4").next().length > 0) ? $("#images_array4 .active4").next() : $("#images_array4 : first");
	

	
	

$active4.fadeOut(function(){
	
$active4.removeClass("active4");
$next4.addClass("active4");

});	
	

}

function faculty_images_slideshow5(){

var $active5 = $("#images_array5 .active5");



var $next5 = ($("#images_array5 .active5").next().length > 0) ? $("#images_array5 .active5").next() : $("#images_array5 : first");
	

	
	

$active5.fadeOut(function(){
	
$active5.removeClass("active5");
$next5.addClass("active5");

});	
	

}


function faculty_images_slideshow6(){

var $active6 = $("#images_array6 .active6");



var $next6 = ($("#images_array6 .active6").next().length > 0) ? $("#images_array6 .active6").next() : $("#images_array6 : first");
	

	
	

$active6.fadeOut(function(){
	
$active6.removeClass("active6");
$next6.addClass("active6");

});	
	

}

	

setInterval("faculty_images_slideshow1()",5000);
	
setInterval("faculty_images_slideshow2()",5700);	

setInterval("faculty_images_slideshow3()",4000);

setInterval("faculty_images_slideshow4()",5900);

setInterval("faculty_images_slideshow5()",6000);

setInterval("faculty_images_slideshow6()",5200);
	
