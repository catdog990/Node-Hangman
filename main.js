var inquirer = require ("inquirer");
// var letter = require ("./letter.js");
var word = require("./word");
var lettersGuessed = [];
var guessesLeft = 10;

function startGame(){
	var that = this;

	if(lettersGuessed.length > 0){
		lettersGuessed = [];
	};

	if(guessesLeft < 10){
		guessesLeft = 10;
	};

	inquirer.prompt([{
		name:"start",
		type:"input",
		message:"Want to Play a Game? " + " yes/no",
		choices:["YES", "NO"]
	}]).then(function(response){
		if(response.start.toUpperCase() === "YES"){
			nextWord();
		};
		if(response.start.toUpperCase() === "NO"){
			console.log("WUTEVA!!")
		};
	});
};

function nextWord(){
	var itsNext = word[Math.floor(Math.random()* word.length)].split("");
	console.log(itsNext);
};

startGame();



// function gameOver(){
// 	if(guessesLeft === 0){

// 		inquirer.prompt([{
// 			name: "play-again",
// 			type: "input",
// 			message: "Play Again?"
// 		}]).then(function(response){
// 			if(response.play-again){
// 				startGame();
// 			}
// 			else{
// 				console.log("Well then be that way...")
// 			};
// 		});

		
// 	};
// 	};