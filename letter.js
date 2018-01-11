var welp = require("./word.js");

var letter = function (){

	var wut = new welp("Dwight Shrute", "Michael Scott", "Pam Beasly", "Jim Halpert");
	
	console.log(wut.words.split(""));
	// console.log(wut.is.split(""));
	// console.log(wut.my.split(""));
	// console.log(wut.life.split(""));

};

module.exports = letter;