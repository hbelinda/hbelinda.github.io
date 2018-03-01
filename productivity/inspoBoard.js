function openModal(){

	var modal = document.getElementById("myModal")
	modal.style.display = "block";
	document.onkeydown = function(evt) {
	    evt = evt || window.event;
	    if (evt.keyCode == 27) {
	       closeModal();
	    };
			if(evt.keyCode == 37){changeSlides(-1);};
			if(evt.keyCode == 39){changeSlides(1);};
	};
}


function keyPress(event)
		{
			console.log("in keyPress");
			if(event.keyCode == 27) {console.log("pressed esc"); closeModal();}
		//	if(event.keyCode == 37) {changeSlides(-1);} //left arrow
		//	if(event.keyCode == 39) {changeSlides(1);} //right arrow
		}

function closeModal(){
	document.getElementById("myModal").style.display = "none";
	document.onkeydown = function(){};
}

var slideIndex = 1;
showSlides(slideIndex);

//next and previous
function changeSlides(n){
	showSlides(slideIndex += n);
}

//thumbnail control
function currentSlide(n){
	showSlides(slideIndex = n);
}

var play = document.getElementById("play");
var slideShowIndex = 0;
play.addEventListener("click", function(){slideShow();});

function slideShow()
{
	var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideShowIndex++;
    if (slideShowIndex > slides.length) {slideShowIndex = 1}
    slides[slideShowIndex-1].style.display = "block";

    setTimeout(slideShow, 5000);
}

function showSlides(n){
	//console.log("in showSlides " + n);
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("demo");
	var captionText = document.getElementsByClassName("caption");

	if(n > slides.length){slideIndex=1;}
	if(n < 1 ) {slideIndex = slides.length;}
	for(i=0; i<slides.length; i++)
	{
		slides[i].style.display = "none";
	}
	for(i = 0; i<dots.length; i++)
	{
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
	captionText.innerHTML = dots[slideIndex-1].alt;
}
