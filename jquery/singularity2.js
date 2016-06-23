
//function banner_slideshow(){
	
	//var image_arr = document.getElementsByClassName("slides");

	
	
	//for(i = 0; i < image_arr.length; i++){
		
	    //image_arr[i].style.display = "block";  	
		
		//if( i >= image_arr.length){
			
			//i = 0;
			//continue;
			
		//}
		
		//else{
			
			//continue;
		//}
	//}
	
	
	
	
//}



//setInterval("banner_slideshow()",2000);

var slideIndex=1;

showSlides(slideIndex);

function plusSlides(n){
	
showSlides(slideIndex += n);	
	
	
}

function showSlides(n){
	
	var i;
	
	var slides = document.getElementsByClassName("slides");
	
	if(n > slides.length){slidesIndex = 1}
	
	if(n < 1){slideIndex = slides.length}
	
	for(i = 0; i < slides.length ; i++)
		
		{
			
			slides[i].style.display = "none";
			
			
		}
	
	slides[slideIndex-1].style.display = "block";
}



















