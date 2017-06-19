// Variables

	var wins = 0;
	var losses = 0;
	var colorsArray = ["red", "blue", "green"];
	var guesses = 8;

	// Red Variables
		var red0 = "_ ";
		var red1 = "_ ";
		var red2 = "_";
		var redWord = red0 + red1 + red2;
	// Blue Variables
		var blue0 = "_ ";
		var blue1 = "_ ";
		var blue2 = "_ ";
		var blue3 = "_";
		var blueWord = blue0 + blue1 + blue2 + blue3;
	//Green Variables
		var green0 = "_ ";
		var green1 = "_ ";
		var green2 = "_ ";
		var green3 = "_ ";
		var green4 = "_";
		var greenWord = green0 + green1 + green2 + green3 + green4;

	// console.log(wins);
	// console.log(losses);
	// console.log(colorsArray[0]);
	// console.log(colorsArray[1]);
	// console.log(colorsArray[2]);
	// console.log(redWord);
	// console.log(blueWord);
	// console.log(greenWord);

// Functions
	function chooseWord () {
		var currentWord = colorsArray[Math.floor(Math.random () * colorsArray.length)];
		console.log(currentWord);
	}

// Running Code

	chooseWord();

	document.onkeyup = function () {
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		console.log(userGuess);

		if (currentWord == colorsArray[0]) {
			if (userGuess == "r") {
				var red0 = "r";
			}
			else if (userGuess == "e") {
				var red1 = "e";
			}
			else if (userGuess == "d") {
				var red2 = "d";
			}
			console.log(redWord);
		}
	}

