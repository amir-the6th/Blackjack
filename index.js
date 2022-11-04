
let player = {
    name: "Amir",
    chips: 354
}

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

//elements
let playerEl = document.getElementById("player-el");
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

//start of the game info about the player
playerEl.textContent = player.name + ": $" + player.chips;

// Make this function return a random number between 1 and 13
function getRandomCard() {
    // if 1     -> return 11
    // if 11-13 -> return 10
    let num = Math.floor( Math.random()*13 ) + 1;
    console.log(num);
    
    if (num ===1) num = 11;
    else if (num > 10) num = 10;
    
    return num;
}

function startGame() {
    if (player.chips > 0) {
        isAlive = true;
        hasBlackJack = false;
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard;
        renderGame();
    } else {
        console.log("here");
        messageEl.textContent = "You have lost, " + player.name + "!\n Please come back with more money.";
    }
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    // Create a for loop that renders out all the cards instead of just two
    for(let i=0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
        updateChips(hasBlackJack);
    } else {
        message = "You're out of the game!";
        isAlive = false;
        updateChips(isAlive);
    }
    messageEl.textContent = message;
}


function newCard() {
    if(isAlive && !hasBlackJack) {
        let card = getRandomCard();
        sum += card;
        // Push the card to the cards array
        cards.push(card);
        renderGame();
    }
}

function updateChips(won) {
    // hardcoded values for now, will study the basics of
    // Blackjack and gambling then update this logic later.

    if(won) {
        player.chips += 146;
        playerEl.textContent = player.name + ": $" + player.chips;
    } else {
        player.chips -= 57;
        playerEl.textContent = player.name + ": $" + player.chips;
    }
}