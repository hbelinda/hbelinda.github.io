/*
	Javascript for Guess A Number webpage
*/


var answer = Math.floor(Math.random() *101);
var pastGuess = " ";

window.onload = function()
{
//	var answer = Math.floor(Math.random() *101);
//	alert("the answer is: " + answer);
//	var guess = enterGuess();
//	colorBar(guess, answer);
	
}

function colorBar(guess, answer)
{
//	alert(guess);
	var left;
	left = document.getElementById("left");
	var right;
	right = document.getElementById("right");

	if(guess < answer){
		left.style.width = guess + "%" ;
	}// if
	else if(guess > answer)
	{
		right.style.width = 100-guess +"%";
	}// else if
	else{
		document.getElementById("winner").innerHTML = "Congrats! You guessed the right answer of " +answer;
		create();
	}//else
} //colorBar	

function enterGuess()
{
	alert("the answer is: " + answer);
	var guess =(document.getElementById("theGuess").value);
	colorBar(guess, answer);
	this.pastGuess = this.pastGuess + guess + "<br>";
	document.getElementById("thePast").innerHTML = this.pastGuess;
} //enterGuess	


//confetti stuff
function makeConfettiFall()
{ //calls the move function to make the confetti fall
	var i; //id number of confetti being moved
	var element; //hold the id of the container
	element = document.getElementById("container");
	element.style.borderBottom = "hidden";
	i = 0;
	while (i < 100)
	{
		window.setTimeout (function() {	move("confetti", 0, container.offsetWidth, 5, 3);}, 100 * i);
		i = i + 1;
	} //while
}

function move (prefix, leftBoundary, rightBoundary, maxSideMovement, maxDownMovement)
{ //makes the confetti move
	var element; //get the confetti that will move
	var left; //how much it will move horizontally
	var minus;  //holds plus and minus
	var right; //keeps it from going out of the right boundary
	var side; //how much the confetti moves to the side
	var sign; // hold the sign that will be placed on the number of pixels it will move
	var i; // the number in the id
	i = 0;
	element = document.getElementById(prefix + i);
	minus = "-+";
	sign = "";

	while (element !== null)
	{
		element.style.top = getNumericPrefix(element.style.top) + getRandomInteger(maxDownMovement) + "px";
		sign = minus.charAt(getRandomInteger(1));
		side = Number(sign + getRandomInteger(maxSideMovement));
		left = Math.min((getNumericPrefix(element.style.left) + side), rightBoundary);
		right = Math.max (leftBoundary, left);

		element.style.left = right + "px";
		i = i + 1;
		element = document.getElementById(prefix + i);
	}
}

function getNumericPrefix(data)
{ //returns the numeric prefix in data sent down
	var i; //what character in data we are at
	var loc; //where a dot is
	var numbers; //number options
	var result; //the numeric prefix
	var stop; //where second dot is. the function will return only the numbers before it
	i = 0;
	numbers = "0123456789.-+";
	result = "";
	if (data.length > 0)
	{
		if (numbers.indexOf(data.charAt(i))>=0)
			while(numbers.indexOf(data.charAt(i))>=0)
			{
				result = result + data.charAt(i);
				i = i + 1;
			} //while
		else { result = "0"}
	}
	else { result = "0"}

	loc = result.indexOf(".");
	if (result.indexOf(".", loc + 1)>0)
		{
			stop = result.indexOf(".", loc+1);
			result = result.substring (0, stop);
		}
	return Number(result);
}

function create()
{ //calls create confetti when document is clicked
	createConfetti("container", 200);
}

function createConfetti(containerId, howMany)
{ //creates a confetti
	var container; //will hold the id of the container
	var element; //will hold the id of the confetti element
	var height; //height of the container that the confetti can contain
	var html; //holds the html
	var i; //what number is in the id of the confetti element
	var idPrefix; //holds the idprefix of confetti
	var width; //width of container that the confetti can contain
	html = "";
	howMany = "" + howMany;
	i = 0;
	idPrefix = "confetti";

	while (i < howMany)
	{
		html = html + createHTMLElement ('span', idPrefix + i, 'confetti', '&bull;');
		i = i + 1;
	}// while

	container = document.getElementById (containerId);
	container.innerHTML = html;
	i = 0;

	while (i < howMany)
	{
		element = document.getElementById (idPrefix + i);
		height = getRandomInteger(Number(container.offsetHeight - 4 - element.offsetHeight));
		width = getRandomInteger(Number(container.offsetWidth - 4 - element.offsetWidth));
		element.style.color = getRandomRGB();
		element.style.top =  height + 'px';
		element.style.left = width + 'px';
		i = i + 1;
	} //while
	document.onclick = makeConfettiFall;
}

function createHTMLElement(elementType, id, classInfo, content)
{ //creates html element according to the type, id, class, and content
	if (elementType === null) { elementType = "" };
	if (id === null){ id = "" };
	if (classInfo === null){ classInfo = "" };

	elementType = trim(elementType);
	id = trim(id);
	classInfo = trim(classInfo);

	if (id !== "") {id = " id=" + '"' + id + '"'};
	if (classInfo !== ""){classInfo = " class=" + '"' + classInfo +'"'};

	return  '<' + elementType +
			id  + classInfo   +
			'>' + content     +
			'</'+ elementType + '>';
}

function getRandomRGB()
	{ //gets a random color
			var blue; //gets the blue color
			var green; //gets the green color
			var red; //get the red color
			blue = getRandomInteger(255);
			green = getRandomInteger(255);
			red = getRandomInteger (255);
			return "rgb(" + red + "," + green + "," + blue + ")";
	} //getRandomRGB

function getRandomInteger (upperLimit)
	{ //gets a random integer
	var result; //the random integer
	result = Math.floor (Math.random() * (upperLimit +1));
	return result;
	} //getRandomInteger

function trim(data)
{ //removes leading and trailing whitespace characters
	var end; // location where the last whitespace is
	var result; //the data without leading and trailing whitespace
	var start; //location where the first whitespace is
	var whiteSpace; //holds the types of whitespaces

	if (typeof data === "string")
	{
		whiteSpace = " \n\r\t\f"
		start = 0;

		while (start < data.length &&
			   whiteSpace.indexOf(data.charAt(start))>= 0)
				{	start = start +1;	}

		end = data.length - 1;

		while (end >= 0 &&
			   whiteSpace.indexOf(data.charAt(end)) >= 0)
				{	end = end - 1;	}

		if (end < start)
		{ result = ""}
		else
		{ result = data.substring(start, end+1)}
	}
	else {result = data;}
	return result;
}