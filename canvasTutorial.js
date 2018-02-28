/* canvasTutorial.js*/



window.onload = function()
{
	draw();

}

function draw()
{
	var canvas = document.getElementById("theCanvas");
	var context = canvas.getContext("2d");
	
	var ratio = window.devicePixelRatio;
	var old_width = canvas.width;
	var old_height = canvas.height;
	canvas.width = old_width * ratio;
	canvas.height = old_height * ratio;
	canvas.style.width = old_width + "px";
	canvas.style.height = old_height + "px";
	context.scale(ratio, ratio);
	
	
	context.fillStyle = "#2f3520";
	context.fillRect(10,10,50,50);
	
	context.fillStyle = "rgba(24,53,200,0.5)";
	context.fillRect(30,30,50,50);
	
	context.clearRect(45,45,60,60); //makes a blank white rectangle 
	context.strokeRect(50,50,50,50); //draws a rectangle outline
	
	context.beginPath();
	context.moveTo(75,60);
	context.lineTo(100,80);
	context.lineTo(100,35);
	context.fill();

/*	
	var req = new XMLHttpRequest();
	req.onreadystatechange = function(){
		if(req.readyState ==4 && req.status == 200){
			
			window.alert("sucess");
			window.alert(req.responseText);
		}
	}
	req.open("GET", "http://freegeoip.net/json/111.118.10.64", true);
//	req.open("GET", "http://swapi.co/api/people/1", true);
	req.send();
*/


	
}