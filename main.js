var inquirer = require ("inquirer");
var letter = require ("./letter.js");

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
		message:"Want to Play a Game?"
	}]).then(function(response){
		if(response.start){
			nextWord()// reference to the ghasper nextWord function//
		};
	});


function nextWord{
	var why = for(var i = 0;i < wut.length; i++)
};

};

function gameOver(){
	if(guessesLeft === 0){

		inquirer.prompt([{
			name: "play-again",
			type: "input",
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