var colors= [
"rgb(255, 0, 0)",
"rgb(255, 255, 0)",
"rgb(0, 255, 0)",
"rgb(0, 255, 255)",
"rgb(0, 0, 255)",
"rgb(255, 0, 255)"
]
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var messageDisplay = documevar colors= generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	/*adding initial colors to squares  getElementById()*/
	squares[i].style.backgroundColor= colors[i];
	/*adding listners  document.addEventListener()*/
	squares[i].addEventListener("click", function(){
		/*grab the color*/
		var clickedColor = this.style.backgroundColor;
		/*Compare Color*/
		
		if(clickedColor === pickedColor) {
			messageDisplay.textContent	= "correct!";
			resetButton.textContent = "Play Again?"
			changeColors(clickedColor);
			h1.style.backgroundColor= clickedColor;
		} else{
		this.style.backgroundColor = "#232323"
		messageDisplay.textContent	="try Again!"
	}
  });
}

function changeColors(color){
	//loop through all the squares
	for (var i= 0; i<squares.length; i++){
		//chnage each color to match the given color
		squares[i].style.backgroundColor	= color;		

	}	
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}	

function generateRandomColors(num){
	//make an array
	var arr = [];
	//add random colors to an array
	for (var i = 0; i<num; i++){
		arr.push(randomColor());

	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a red color from 0-255
	var r = Math.floor(Math.random()*256);
	//pick a green color from 0-255
	var g = Math.floor(Math.random()*256);
	//pick a blue color from 0-255
	var b = Math.floor(Math.random()*256);

	return "rgb("+r+", "+g+", "+b+")";// the spaces are very important or 
	//it wont work properly BUG BUG BUG
}

resetButton.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColors(6);
	//pick a new random color from any array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//change colors of squares 
	for(var i = 0; i<squares.length; i++){
		squares[i].style.background = colors[i];
	}
	h1.style.background = "#232323"
})

nt.quesrySelector("#message");
var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	/*adding initial colors to squares  getElementById()*/
	squares[i].style.backgroundColor= colors[i];
	/*adding listners  document.addEventListener()*/
	squares[i].addEventListener("click", function(){
		/*grab the color*/
		var clickedColor = this.style.backgroundColor;
		/*Compare Color*/
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!"
			changeColors(clickedColor);
		} else{var colors= generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	/*adding initial colors to squares  getElementById()*/
	squares[i].style.backgroundColor= colors[i];
	/*adding listners  document.addEventListener()*/
	squares[i].addEventListener("click", function(){
		/*grab the color*/
		var clickedColor = this.style.backgroundColor;
		/*Compare Color*/
		
		if(clickedColor === pickedColor) {
			messageDisplay.textContent	= "correct!";
			changeColors(clickedColor);
			h1.style.backgroundColor= clickedColor;
		} else{
		this.style.backgroundColor = "#232323"
		messageDisplay.textContent	="try Again!"
	}
  });
}

function changeColors(color){
	//loop through all the squares
	for (var i= 0; i<squares.length; i++){
		//chnage each color to match the given color
		squares[i].style.backgroundColor	= color;		

	}	
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}	

function generateRandomColors(num){
	//make an array
	var arr = [];
	//add random colors to an array
	for (var i = 0; i<num; i++){
		arr.push(randomColor());

	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a red color from 0-255
	var r = Math.floor(Math.random()*256);
	//pick a green color from 0-255
	var g = Math.floor(Math.random()*256);
	//pick a blue color from 0-255
	var b = Math.floor(Math.random()*256);

	return "rgb("+r+", "+g+", "+b+")";// the spaces are very important or 
	//it wont work properly BUG BUG BUG
}
		messageDisplay.textContent = "Try Again!"
	}
  });
}

function changeColor(color){
	//loop through all squares
	for ( var i = 0; i < squares.length; i++){
		squares[i].style.background = color; //change each color to match given color
	}
}

function pickColor(){
	var random = math.floor(math.random() * color.length);
	return colors(random);
}
