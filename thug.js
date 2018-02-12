/*
	Javascript for THUG webpage
*/




window.onload = function()
{
	alert("This Book is AMAZING");
	console.log("lets talk about THUG");
	var movieInfo = document.getElementById("movieInfo");
	movieInfo.onmouseover = wordWave(movieInfo.innerHTML);
	
}

function wordWave(words)
{
	for(var i = 0; i<words.length; i++)
	{
		var randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
		words.charAt(i).fontcolor(randomColor);
	}
	
}