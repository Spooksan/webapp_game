var colors= [
"rgb(255, 0, 0)",
"rgb(255, 255, 0)",
"rgb(0, 255, 0)",
"rgb(0, 255, 255)",
"rgb(0, 0, 255)",
"rgb(255, 0, 255)"
]
var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
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
			alert("correct!");
		} else{
		alert("Wrong!");
	}
  });
}