// Variables
	
	var wins = 0;
	var losses = 0;
	var colorsArray = ["red", "blue", "green", "orange", "yellow", "indigo", "violet", "purple", "pink", "black", "white", "fuchsia", "silver", "gray", "olive", "maroon", "aqua", "lime", "teal", "navy", "gold", "magenta", "brown", "beige", "tan", "burgundy", "crimson", "turquoise", "cherry", "rose", "jam", "merlot", "garnet", "ruby", "scarlet", "wine", "brick", "apple", "mahogany", "blood", "sangria", "berry", "currant", "blush", "candy", "lipstick", "pearl", "alabaster", "snow", "ivory", "cream", "cotton", "chiffon", "salt", "lace", "coconut", "linen", "bone", "daisy", "powder", "frost", "porcelain", "parchment", "rice", "slate", "sky", "cobalt", "ocean", "peacock", "azure", "cerulean", "lapis", "spruce", "stone", "aegean", "denim", "admiral", "sapphire", "arctic", "coffee", "mocha", "peanut", "carob", "hickory", "wood", "pecan", "walnut", "caramel", "gingerbread", "syrup", "chocolate", "tortilla", "umber", "tawny", "brunette", "cinnamon", "penny", "cedar", "shadow", "graphite", "iron", "pewter", "cloud", "smoke", "anchor", "ash", "porpoise", "dove", "fog", "flint", "charcoal", "pebble", "lead", "coin", "fossil", "mauve", "boysenberry", "lavender", "plum", "lilac", "grape", "periwinkle", "eggplant", "iris", "heather", "amethyst", "raisin", "orchid", "mulberry", "macaroon", "granola", "oat", "fawn", "sand", "sepia", "latte", "oyster", "biscotti", "parmesan", "hazelnut", "sandcastle", "buttermilk", "shortbread", "canary", "daffodil", "flaxen", "butter", "lemon", "mustard", "corn", "medallion", "dandelion", "fire", "bumblebee", "banana", "butterscotch", "dijon", "honey", "blonde", "pineapple", "ebony", "midnight", "crow", "ink", "raven", "oil", "grease", "onyx", "pitch", "soot", "sable", "coal", "metal", "obsidian", "jade", "spider", "leather", "tangerine", "marigold", "cider", "rust", "ginger", "tiger", "bronze", "cantaloupe", "apricot", "clay", "carrot", "squash", "spice", "marmalade", "amber", "sandstone", "yam", "punch", "watermelon", "flamingo", "rouge", "salmon", "coral", "peach", "strawberry", "rosewood", "lemonade", "taffy", "bubblegum", "crepe"];
	var guesses = 9;
	var displayWord = "";
	var letterBank = [];
	var currentWord = "";
	var splitWord = [];
	var drawWord = "";
	var storedGuess = [];
	var usedLetters = "";

// Functions

	function chooseWord () {
		currentWord = colorsArray[Math.floor(Math.random () * colorsArray.length)];
		console.log(currentWord);
		guesses = 9;
		displayWord = "";
		letterBank = [];
		usedLetters = "";
		spacesWord();
	}

	function spacesWord () {
		// splits string of currentWord into an array consisting of each letter
		splitWord = currentWord.split("");
		console.log(splitWord);
		for (var i = 0; i < splitWord.length; i++) {
			splitWord[i] = "_ ";
			displayWord += splitWord[i];
		}
		console.log(displayWord);
	}

// Running Code
chooseWord();
console.log(splitWord);

document.onkeyup = function (event) {

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	if (currentWord.indexOf(userGuess) > -1) {
		// var test = [];
		storedGuess.push(userGuess);
		drawWord = "";
		for (var i = 0; i < currentWord.length; i++) {
			if (storedGuess.indexOf(currentWord[i]) > -1) {
				drawWord += currentWord[i];
			}
			else {
				drawWord += "_ ";
			}
			// test.push(currentWord[i]);
		}
		displayWord = drawWord;
		console.log(drawWord);
		// console.log(test);
		if (displayWord == currentWord) {
			wins++;
			chooseWord();
			storedGuess = [];
		}
	}
	else {
		guesses--;
		letterBank.push(userGuess);
		console.log(letterBank);
		usedLetters = letterBank.join(" ");
		console.log("Wrong Letter");
		if (guesses < 0) {
			losses++;
			guesses = 9;
			chooseWord();
		}
	}

	var html = "<p>Choose a Letter!</p>" + 
		"<p>Wins: " + wins + "</p>" + 
		"<p>Losses: " + losses + "</p>" + 
		"<p> Current Word: " + "</p>" + 
		"<p>" + displayWord + "</p>" + 
		"<p>Guesses left: " + guesses + "</p>" + 
		"<p>Letters Used: </p>" + 
		"<p>" + usedLetters + "</p>";

	document.querySelector("#game").innerHTML = html;
}

// Create an empty array for used letters
// Push userguess when wrong to array
// Have array converted to a string
// print string in document