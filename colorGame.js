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
var messageDisplay = document.quesrySelector("#message");
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
		} else{
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
