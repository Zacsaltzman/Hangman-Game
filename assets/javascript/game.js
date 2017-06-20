// Variables

	var wins = 0;
	var losses = 0;
	var colorsArray = ["red", "blue", "green"];
	var guesses = 9;
	var currentWord = "";
	var joinLetters = {
		joinWord: function (arr) { 
		arr.letters.join();
		}
	}
	var displayWord = "";
	var letterBank = [];
	var letterPrint = letterBank.join();
	var selectedLetter = "";

	// Red Variables]
	var red = {
		letters: ["_ ", "_ ", "_ "],
	}
		var red0 = "_ ";
		var red1 = "_ ";
		var red2 = "_";
		var redWord = red0 + red1 + red2;
		var redIndex = colorsArray.indexOf("red");
	// Blue Variables
		var blue0 = "_ ";
		var blue1 = "_ ";
		var blue2 = "_ ";
		var blue3 = "_";
		var blueWord = blue0 + blue1 + blue2 + blue3;
		var blueIndex = colorsArray.indexOf("blue");
	//Green Variables
		var green0 = "_ ";
		var green1 = "_ ";
		var green2 = "_ ";
		var green3 = "_ ";
		var green4 = "_";
		var greenWord = green0 + green1 + green2 + green3 + green4;
		var greenIndex = colorsArray.indexOf("green");

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
		currentWord = colorsArray[Math.floor(Math.random () * colorsArray.length)];
		console.log(currentWord);
		guesses = 9;
	}

	function letterCache () {
		selectedLetter = String.fromCharCode(event.keyCode).toLowerCase();
		letterBank.push(selectedLetter);
	}

// Running Code

	chooseWord();

	document.onkeyup = function () {
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		console.log(userGuess);

		if (currentWord == "red") {
			if (userGuess == "r") {
				red0 = "r";
				redWord = red0 + red1 + red2;
			}
			else if (userGuess == "e") {
				red1 = "e";
				redWord = red0 + red1 + red2;
			}
			else if (userGuess == "d") {
				red2 = "d";
				redWord = red0 + red1 + red2;
			}
			else {
				guesses--;
				letterCache();
				if (guesses < 0) {
					losses++;
					if (redIndex > -1) {
						colorsArray.splice(redIndex, 1);
					} 
					chooseWord();
				}
			}
			if (red0 == "r" && red1 == "e" && red2 == "d") {
				wins++;
				if (redIndex > -1) {
						colorsArray.splice(redIndex, 1);
					} 
				chooseWord();
			}
			displayWord = redWord;
			console.log(redWord);
			console.log(guesses);
		}

		if (currentWord == "blue") {
			if (userGuess == "b") {
				blue0 = "b";
				blueWord = blue0 + blue1 + blue2 + blue3;
			}
			else if (userGuess == "l") {
				blue1 = "l";
				blueWord = blue0 + blue1 + blue2 + blue3;
			}
			else if (userGuess == "u") {
				blue2 = "u";
				blueWord = blue0 + blue1 + blue2 + blue3;
			}
			else if (userGuess == "e") {
				blue3 = "e";
				blueWord = blue0 + blue1 + blue2 + blue3;
			}
			else {
				guesses--;
				letterCache();
				if (guesses < 0) {
					losses++;
					if (blueIndex > -1) {
						colorsArray.splice(blueIndex, 1);
					} 
					chooseWord();
				}
			}
			if (blue0 == "b" && blue1 == "l" && blue2 == "u" && blue3 == "e") {
				wins++;
				if (blueIndex > -1) {
						colorsArray.splice(blueIndex, 1);
				} 
				chooseWord();
			}
			displayWord = blueWord;
			console.log(blueWord);
			console.log(guesses);
		}

		if (currentWord == "green") {
			if (userGuess == "g") {
				green0 = "g";
				greenWord = green0 + green1 + green2 + green3 + green4;
			}
			else if (userGuess == "r") {
				green1 = "r";
				greenWord = green0 + green1 + green2 + green3 + green4;
			}
			else if (userGuess == "e") {
				green2 = "e";
				green3 = "e";
				greenWord = green0 + green1 + green2 + green3 + green4;
			}
			else if (userGuess == "n") {
				green4 = "n";
				greenWord = green0 + green1 + green2 + green3 + green4;
			}
			else {
				guesses--;
				letterCache();
				if (guesses < 0) {
					losses++;
					if (greenIndex > -1) {
						colorsArray.splice(greenIndex, 1);
					} 
					chooseWord();
				}
			}
			if (green0 == "g" && green1 == "r" && green2 == "e" && green3 == "e" && green4 == "n") {
				wins++;
				if (greenIndex > -1) {
						colorsArray.splice(greenIndex, 1);
				} 
				chooseWord();
			}
			displayWord = greenWord;
			console.log(greenWord);
			console.log(guesses);
		}

		var html = "<p>Press any letter to begin game</p>" + 
		"<p>Wins: " + wins + "</p>" + 
		"<p>Losses: " + losses + "</p>" + 
		"<p> Current Word: " + "</p>" + 
		"<p>" + displayWord + "</p>" + 
		"<p>Guesses left: " + guesses + "</p>" + 
		"<p>Letters Used: </p>" + 
		letterPrint;

		document.querySelector("#game").innerHTML = html;

	}

