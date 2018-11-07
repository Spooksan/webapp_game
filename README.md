# webapp_game
A small project on building a webapp game with unlimited potential.

Part 1
HTML
The objective of the game is to match the tiles below with a title at the top.
Using division to seperate each Tile and use a class called squares. 
This class is placed inside a div with id, colorDisplay.


CSS
Start of with a basic CSS for the first part.
With photograpdhy grid in mind, making an all responsive grid that serves all platform.
Each box placed inside the container take up 30% and a margin of 1.66% that all adds up to 100% of the screen.
To centre the features, set the container margin as 0 for top and bottom; and auto for left and right.

Javascript
Start of with a simple 6 color rgb set.
The objective is that, everytime the page loads, it picks 6 random color and then it assigns each one a color to one of the divs.
First we introduce the code without the randomised part.
We add eventlistner click and use a if-else logic to see if the pickedColor = colorDisplay.



Part 2
Changing the behaviour when we click the right and wrong answer

HTML
we created a seperate div with id message 

CSS
we just made all the lines in span turn white.

JS
var pickedColor is changed to pcikColor and then we just define it with function
we call the id message using Query selector and then assigns a JS var called messageDisplay.
if-else logic to print correct and try again features.
changeColors(color), this feature makes all the suqres turn the same color f the clickedColor is the right choice.
pickColor is randomised with math.random --> which selects a value btw 0-1
math.random * color.length --> 0-1 * lenghth of color array. [0-5]
math.floor to round off and make it a whole number.


Part 3

JS
generating 6 random colors to fill the array and also changing heading background to match if pickedColor = clickedColor
Remove colors variable and set it to a new function called generateRandomColors with an argument to take in 6 or 3 numbers.
create a function to push the random colors into the array
create another function randomColor to generate rgb colors and use return feature to create "rgb(255, 255, 255)"
setting h1 to match pickedColor

Part 4
Adding New colors button and functionality

html
adding a new button inside div with id stripe.

CSS
the button is entered with CSS
we are removing span

JS
we make a reset button by calling it from html using querySelector
adding event listner "click" and then adding logic to it using a function. 
changes are made to even change the textcontent to display "Play Again?" as a rest button.


part 5
Adding Easy and hard mode
Finishing touches on CSS

