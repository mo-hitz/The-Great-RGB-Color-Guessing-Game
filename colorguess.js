//variable to store call the no of times to generate the colors
var numSquares=6;
var colors=generateRandomColors(numSquares);
//selecting the squares grid 
var squares=document.querySelectorAll(".square");
//selecting the heading part to show rgba code if guess is right
var colorDisp=document.getElementById("colorDisp");
//selecting the nav area for the choice if right or wrong
var messageDisp=document.querySelector("#message");
//selecting the h1 to change the background if color picked is right
var h1=document.querySelector("h1");
//correct choice declaration
var pickedColor=pickColor();
//selecting the reset button
var button=document.querySelector("#reset");
//selecting hard and easy button with the help of class
var modebtn=document.querySelectorAll(".mode");

for(var i=0;i<modebtn.length;++i)
{
	modebtn[i].addEventListener("click",function()
	{		
		modebtn[0].classList.remove("selected");
		modebtn[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent==="Easy"?numSquares=3:numSquares=6;
		reset();
	});
}

function reset()
{

	//generate new colors
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	//changing in heading and showing rgba of correct choice
	colorDisp.textContent=pickedColor;
	//for clearing that previous outcome like tryagain correct etc
	messageDisp.textContent="";
	//for changing back to new colors button once we played again once
	button.textContent="New Colors";	
	//change color of square grids
	//loop for selecting the grids
	for(var i=0;i<squares.length;++i)
	{
		if(colors[i])
		{
			squares[i].style.display="block";
			squares[i].style.background=colors[i];
		}
		else
		{
			squares[i].style.display="none";
		}
	}
	h1.style.background="steelblue";

}

button.addEventListener("click",function()
{
	reset();
});

//changing in heading and showing rgba of correct choice
colorDisp.textContent=pickedColor;

//loop to apply bg color to grid and setting the click behaviour
for(var i=0;i<squares.length;++i)
{
	squares[i].style.background=colors[i];
	squares[i].addEventListener("click",function()
	{
		var clickedColor=this.style.background;
		if(clickedColor===pickedColor)
		{
			changeColors(clickedColor);
			messageDisp.textContent="Correct!"; 
			h1.style.background=clickedColor;
			button.textContent="Play Again?";
		}
		else
		{	this.style.background="#232323";
			messageDisp.textContent="Try Again";   
		}
	});
}

//function for formatting changes if answer is correct
function changeColors(color)
{
	//loop through all the squares
	for(var i=0;i<squares.length;++i)
	{
		//change color to match the given color
		squares[i].style.background=color;
	}
	
} 

//function for choosing the random color from the array
function pickColor()
{
	var random =Math.floor(Math.random()* colors.length);
	return colors[random];
}

//generate random colors
function generateRandomColors(num)
{
	//make an array
	var arr=[];
	//run the loop and generate randomcolor
	for(var i=0;i<num;++i)
	{
		arr[i]=randomColor();
	}
	//retrun the created array with some random colors
	return arr;
}

//acutal color function
function randomColor()
{
	//generating random rgbs
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	//return the rgb to be stored in the array
	return   "rgb(" + r +", " + g + ", " + b + ")";
}
