let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

// Make this function return a random number between 1 and 13
function getRandomCard() {
    // if 1     -> return 11
    // if 11-13 -> return 10
    let num = Math.floor( Math.random()*13 ) + 1;
    console.log(num);
    
    if (num ===1) num = 11;
    else if (num === 11 || num === 12 || num === 13) num = 10;
    
    return num;
}

function startGame() {
    renderGame()
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
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}


function newCard() {
    let card = getRandomCard();
    sum += card;
    // Push the card to the cards array
    cards.push(card);
    renderGame();
}
