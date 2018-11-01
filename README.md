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
