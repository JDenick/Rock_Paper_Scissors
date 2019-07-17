    
    var wordChoices = ["r", "p", "s"];
    var wins = 0;
    var losses = 0;
    var ties = 0;

    document.onkeyup = function(){
        var userGuess = String.fromCharCode(event.keyCode).toLocaleLowerCase();

        console.log(userGuess);

        var computerGuess = wordChoices[Math.floor(Math.random()*wordChoices.length)];

        console.log(computerGuess);

        if (userGuess === "r" || userGuess === "p" || userGuess === "s"){
            if ((userGuess === "r" && computerGuess === "s")) {
                wins++;
                alert("computer guessed: SCISSORS... YOU WON!")
                // alert("wins: " + wins)
            }
            if ((userGuess === "r" && computerGuess === "p")) {
                losses++;
                alert("computer guessed: PAPER... you lost")
                // alert("losses: " + losses)
            }
            if ((userGuess === "s" && computerGuess === "p")) {
                wins++;
                alert("computer guessed: PAPER... YOU WON!")
                // alert("wins: " + wins)
            }
            if ((userGuess === "s" && computerGuess === "r")) {
                losses++;
                alert("computer guessed: ROCK... you lost")
                // alert("losses: " + losses)              
            }
            if ((userGuess === "p" && computerGuess === "r")) {
                wins++;
                alert("computer guessed: ROCK... YOU WON!")
                // alert("wins: " + wins)
            }
            if ((userGuess === "p" && computerGuess === "s")) {
                losses++;
                alert("computer guessed: SCISSORS... you lost")
                // alert("losses: " + losses)
            }
            if ((userGuess === computerGuess)) {
                ties++;
                alert("If great minds think alike than you are as smart as a computer... you tied")
                // alert("ties: " + ties)
            }

        }
        else {
            alert("Please Choose r, p, or s");
        }

        var html = "<p>Press r, p, or s to start playing!</p>" + "<p>wins: " + wins + "</p>" + "<p>losses: " + losses + "</p>" + "<p>ties: " + ties + "</p>";

        document.querySelector("#game").innerHTML = html;
    }
