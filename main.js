var inquirer = require ("inquirer");
var letter = require ("./letter.js");

var lettersGuessed = [];
var guessesLeft = 10;

function startGame(){
	var that = this;

	if(lettersGuessed.length > 0){
		lettersGuessed = [];
	};

	guessesLeft = 10;

	inquirer.prompt([{
		name:"start",
		type:"input",//This might need to be changed to "confirm", just testing this out//
		message:"Want to Play a Game?"
	}]).then(function(response){
		if(response.start){

		};
	});


};

function gameOver(){
	if(guessesLeft === 0){

		inquirer.prompt([{
			name: "play-again",
			type: "confirm",//This might need a boolean value, instead of a "yes" or "no"
			message: "Play Again?"
		}]).then(function(response){
			if(response.play-again){
				startGame();
			}
			else{
				console.log("Well then be that way...")
			};
		});

		
	};
};