
var numbers = [];
var random;
var interval;
var msec = 0;
var sec = 0;
var displayMs = 0;
var displaySec = 0;
var status = "stopped";
var score;
var finalScoreS;
var finalScoreMs;

var squareContents = document.querySelectorAll(".squareContent");
var squares = document.querySelectorAll(".squares"); 
var mainBox = document.querySelector(".mainBox")
var para = document.querySelector(".start");
var hs1 = document.querySelector("#hs1");
var hs2 = document.querySelector("#hs2");
var hs3 = document.querySelector("#hs3");
var hs4 = document.querySelector("#hs4");
var hs5 = document.querySelector("#hs5");
var newGame = document.querySelector(".linkToNewGame");


numbers[0] = generateRandom();

function stopWatch(){
	msec++;

	if (msec/1000 === 1) {
		msec = 0;
		sec++;

		if (sec/60 === 1) {
			sec = 0;
		}
	}

	if (msec<10) {
		displayMs = "0" + msec.toString();
	}

	else{
		displayMs = msec;
	}

	if (sec<10) {
		displaySec = "0" + sec.toString();
	}

	else{
		displaySec = sec;
	}

	document.querySelector(".display").innerHTML = displaySec + ":" + displayMs;
}

function startStop(){
	if (status == "stopped") {
		interval = setInterval(stopWatch, 1);
		status = "started";
		para.textContent = null;
		newGame.classList.add("changeA");
		mainBox.classList.add("showContent");
	}
}

para.addEventListener("click", startStop);

function checkingHighScores(){
		if (finalScoreS<parseInt(localStorage.sc1s)){
		
			localStorage.sc5s = localStorage.sc4s;
			localStorage.sc5ms = localStorage.sc4ms;

			localStorage.sc4s = localStorage.sc3s;
			localStorage.sc4ms = localStorage.sc3ms;

			localStorage.sc3s = localStorage.sc2s;
			localStorage.sc3ms = localStorage.sc2ms;

			localStorage.sc2s = localStorage.sc1s;
			localStorage.sc2ms = localStorage.sc1ms;

			localStorage.sc1s = finalScoreS;
			localStorage.sc1ms = finalScoreMs;
		}

		else if (finalScoreS == parseInt(localStorage.sc1s)){
				if (finalScoreMs<parseInt(localStorage.sc1ms)){
					localStorage.sc5s = localStorage.sc4s;
					localStorage.sc5ms = localStorage.sc4ms;

					localStorage.sc4s = localStorage.sc3s;
					localStorage.sc4ms = localStorage.sc3ms;

					localStorage.sc3s = localStorage.sc2s;
					localStorage.sc3ms = localStorage.sc2ms;

					localStorage.sc2s = localStorage.sc1s;
					localStorage.sc2ms = localStorage.sc1ms;

					localStorage.sc1ms = finalScoreMs;
				}
			}

		else if(finalScoreS<parseInt(localStorage.sc2s)){
				localStorage.sc5s = localStorage.sc4s;
				localStorage.sc5ms = localStorage.sc4ms;

				localStorage.sc4s = localStorage.sc3s;
				localStorage.sc4ms = localStorage.sc3ms;

				localStorage.sc3s = localStorage.sc2s;
				localStorage.sc3ms = localStorage.sc2ms;

				localStorage.sc2s = finalScoreS;
				localStorage.sc2ms = finalScoreMs;
			}

		else if (finalScoreS == parseInt(localStorage.sc2s)){
				if (finalScoreMs<parseInt(localStorage.sc2ms)) {
					localStorage.sc5s = localStorage.sc4s;
					localStorage.sc5ms = localStorage.sc4ms;

					localStorage.sc4s = localStorage.sc3s;
					localStorage.sc4ms = localStorage.sc3ms;

					localStorage.sc3s = localStorage.sc2s;
					localStorage.sc3ms = localStorage.sc2ms;

					localStorage.sc2ms = finalScoreMs;
				}
   		}
   		else if(finalScoreS<parseInt(localStorage.sc3s)){
				
				localStorage.sc5s = localStorage.sc4s;
				localStorage.sc5ms = localStorage.sc4ms;

				localStorage.sc4s = localStorage.sc3s;
				localStorage.sc4ms = localStorage.sc3ms;

				localStorage.sc3s = finalScoreS;
				localStorage.sc3ms = finalScoreMs;
			}

		else if (finalScoreS == parseInt(localStorage.sc3s)){
				if (finalScoreMs<parseInt(localStorage.sc3ms)) {
					
					localStorage.sc5s = localStorage.sc4s;
				 	localStorage.sc5ms = localStorage.sc4ms;

					localStorage.sc4s = localStorage.sc3s;
					localStorage.sc4ms = localStorage.sc3ms;

					localStorage.sc3ms = finalScoreMs;
				}
   		}

   		else if(finalScoreS<parseInt(localStorage.sc4s)){
				
				localStorage.sc5s = localStorage.sc4s;
				localStorage.sc5ms = localStorage.sc4ms;

				localStorage.sc4s = finalScoreS;
				localStorage.sc4ms = finalScoreMs;
			}

		else if (finalScoreS == parseInt(localStorage.sc4s)){
				if (finalScoreMs<parseInt(localStorage.sc4ms)){
					
					localStorage.sc5s = localStorage.sc4s;
					localStorage.sc5ms = localStorage.sc4ms;

					localStorage.sc4ms = finalScoreMs;
				}
   		}

   		else if(finalScoreS<parseInt(localStorage.sc5s)){
				localStorage.sc5s = finalScoreS;
				localStorage.sc5ms = finalScoreMs;
			}

		else if (finalScoreS == parseInt(localStorage.sc5s)){
				if (finalScoreMs<parseInt(localStorage.sc5ms)) {
					localStorage.sc5ms = finalScoreMs;
				}
   		}

   		hs1.textContent = localStorage.sc1s + ":" + localStorage.sc1ms;
		hs2.textContent = localStorage.sc2s + ":" + localStorage.sc2ms;
		hs3.textContent = localStorage.sc3s + ":" + localStorage.sc3ms;
		hs4.textContent = localStorage.sc4s + ":" + localStorage.sc4ms;
		hs5.textContent = localStorage.sc5s + ":" + localStorage.sc5ms;
}

function stopping(){
	clearInterval(interval);
	status = "stopped";
	finalScoreS = displaySec;
	finalScoreMs = displayMs;
	checkingHighScores();
    score = displaySec + ":" + displayMs;
	}

function generateRandom(){
	return Math.floor((Math.random() * 20) + 1);
}

function intializeRandom(){
	return generateRandom();
}

function checkIfEqual(noToBeChecked){
	if (numbers.includes(noToBeChecked, 0)){
		return false;
	}
	else{
		return true;
	}
}

function decidingFactor(){
	random = intializeRandom();
	var result = checkIfEqual(random);
	while (result == false){
		random = intializeRandom();
		result = checkIfEqual(random);
	}
	return random;
}

for (i = 1; i < 20; i++){
	numbers[i] = decidingFactor();
}

for (i = 0; i < numbers.length; i++){
	squareContents[i].textContent = numbers[i];
}

var t=0;
var reference = 1;

for (i = 0; i < squares.length; i++){
	squares[i].addEventListener("click", function(){
		if (reference<21){
		if (this.textContent == reference){
			var changingToNumber = parseInt(this.textContent);
		 	changingToNumber = changingToNumber+20;
		 	this.textContent = changingToNumber;
			t++;
			reference++;
	   	}
	    }

	    else{
	    	if (this.textContent == reference){
				this.textContent = null;
				reference++;
				if (reference == 41){
					stopping();
	        	}
			}
		}	
});
}

hs1.textContent = localStorage.sc1s + ":" + localStorage.sc1ms;
hs2.textContent = localStorage.sc2s + ":" + localStorage.sc2ms;
hs3.textContent = localStorage.sc3s + ":" + localStorage.sc3ms;
hs4.textContent = localStorage.sc4s + ":" + localStorage.sc4ms;
hs5.textContent = localStorage.sc5s + ":" + localStorage.sc5ms;
