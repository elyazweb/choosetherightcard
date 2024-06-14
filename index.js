let scorea = document.getElementById("score");
let best = document.getElementById("best");
let worse = document.getElementById("worse");
let score = 0;
let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");
let card3 = document.getElementById("card3");
let bestScore = localStorage.getItem('bestScore') ? parseInt(localStorage.getItem('bestScore')) : 0;
let worseScore = localStorage.getItem('worseScore') ? parseInt(localStorage.getItem('worseScore')) : 0;

(function() {
    setInterval(function() {
        if (score > bestScore) {
            best.innerHTML = score;
            localStorage.setItem('bestScore', score);
            bestScore = score;
        } else {
            best.innerHTML = bestScore;
        }
    }, 100); // 1000 milliseconds (1 second)

    // Add event listeners to cards after resetting game
    reset(); // Call reset initially to set up the game
})();

(function() {
    setInterval(function() {
        if (score < worseScore) {
            worse.innerHTML = score;
            localStorage.setItem('worstScore', score);
            worseScore = score;
        } else {
            worse.innerHTML = worseScore;
        }
    }, 100); // 1000 milliseconds (1 second)

    // Add event listeners to cards after resetting game
    reset(); // Call reset initially to set up the game
})();

function rotate() {
    console.log("Starting rotate function");
    card1.style.transform = "rotateY(180deg)";
    card1.style.transition = "all 0.5s";

    setTimeout(function() {
        card1.innerHTML = "<img id='img' style='transform: rotateY(180deg);' src='joker.jpg'>";
        console.log("Set innerHTML of card1");
    }, 100);

    setTimeout(function() {
        card1.style.transform = "rotateY(0deg)";
        card1.style.transition = "all 0.5s";
        setTimeout(function() {
            card1.innerHTML = `<div class="inside">
                <div class="cube" onclick="rotate()"></div>
            </div>`;
            console.log("Reset innerHTML of card1");
            console.log("score: " + score);
        }, 100);
    }, 500);
    score = score + 2;
    scorea.innerHTML = score;
    console.log("End of rotate function");
    setTimeout(function() {reset();}, 1000); // 
}

function rotate2() {
    console.log("Starting rotate2 function");
    card2.style.transform = "rotateY(180deg)";
    card2.style.transition = "all 0.5s";

    setTimeout(function() {
        card2.innerHTML = "<img id='img' src='queenofhearts.jpg'>";
        console.log("Set innerHTML of card2");
    }, 100);

    setTimeout(function() {
        card2.style.transform = "rotateY(0deg)";
        card2.style.transition = "all 0.5s";
        setTimeout(function() {
            card2.innerHTML = `<div class="inside">
                <div class="cube" onclick="rotate2()"></div>
            </div>`;
            console.log("Reset innerHTML of card2");
            console.log("score: " + score);
        }, 100);
    }, 500);
    score--;
    scorea.innerHTML = score;
    console.log("End of rotate2 function");
    setTimeout(function() {reset();}, 1000); // 
}

function rotate3() {
    console.log("Starting rotate3 function");
    card3.style.transform = "rotateY(180deg)";
    card3.style.transition = "all 0.5s";

    setTimeout(function() {
        card3.innerHTML = "<img id='img' src='queenofhearts.jpg'>";
        console.log("Set innerHTML of card3");
    }, 100);

    setTimeout(function() {
        card3.style.transform = "rotateY(0deg)";
        card3.style.transition = "all 0.5s";
        setTimeout(function() {
            card3.innerHTML = `<div class="inside">
                <div class="cube" onclick="rotate3()"></div>
            </div>`;
            console.log("Reset innerHTML of card3");
            console.log("score: " + score);
        }, 100);
    }, 500);
    score--;
    scorea.innerHTML = score;
    console.log("End of rotate3 function");
    setTimeout(function() {reset();}, 1000); // 
}

//Random generator
function reset() {
    console.log("Starting reset function");
    let x = Math.round(Math.random() * 2) + 1; // Generates 1, 2, or 3
    console.log("Generated x: ", x);

    let game = document.getElementById('game'); // Ensure `game` is defined
    console.log("Retrieved game element");

    switch (x) {
        case 1:
            game.innerHTML = `
                <div id="card1">
                    <div class="inside">
                        <div class="cube"></div>
                    </div>
                </div>
                <div id="card2">
                    <div class="inside">
                        <div class="cube"></div>
                    </div>
                </div>
                <div id="card3">
                    <div class="inside">
                        <div class="cube"></div>
                    </div>
                </div>
            `;
            console.log("Set game innerHTML to card1, card2, and card3");
            break;
        case 2:
            game.innerHTML = `
                <div id="card2">
                    <div class="inside">
                        <div class="cube"></div>
                    </div>
                </div>
                <div id="card1">
                    <div class="inside">
                        <div class="cube"></div>
                    </div>
                </div>
                <div id="card3">
                    <div class="inside">
                        <div class="cube"></div>
                    </div>
                </div>
            `;
            console.log("Set game innerHTML to card2, card1, and card3");
            break;
        case 3:
            game.innerHTML = `
                <div id="card3">
                    <div class="inside">
                        <div class="cube"></div>
                    </div>
                </div>
                <div id="card2">
                    <div class="inside">
                        <div class="cube"></div>
                    </div>
                </div>
                <div id="card1">
                    <div class="inside">
                        <div class="cube"></div>
                    </div>
                </div>
            `;
            console.log("Set game innerHTML to card3, card2, and card1");
            break;
        default:
            console.log("Unexpected value of x: ", x);
    }
    console.log("End of reset function");

    // Add event listeners to newly created cards
    card1 = document.getElementById("card1");
    card2 = document.getElementById("card2");
    card3 = document.getElementById("card3");

    card1.addEventListener("click", rotate);
    card2.addEventListener("click", rotate2);
    card3.addEventListener("click", rotate3);
}


function restart() {
    score = 0;
    scorea.innerHTML = score;
    reset();
}