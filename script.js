
let cardsData = []
let sum = 0

let isAlive = false
let message = ''
let messageEl = document.getElementById('playmessage');
let theSum = document.getElementById('sum');
let cards = document.getElementById('cards');

let player = {
    name: "Mary Jones",
    chips: 100
}

let playerChips = document.getElementById('player-chips');

function random() {
    let randomNum = Math.floor(Math.random() * 13) + 1
    if (randomNum === 1) {
        return 11
    } else if (randomNum > 10) {
        return 10
    }
    else return randomNum
}
playerChips.textContent = player.name + ": $" + player.chips
backCol = document.getElementById("container")
let hasBlackJack
function startGame() {
    if (player.chips > 0) {
        messageEl.className = "new"
        hasBlackJack = false
        isAlive = true
        let firstCard = random();
        let secondCard = random();
        cardsData = [firstCard, secondCard]
        sum = firstCard + secondCard
        player.chips -= 10;

        renderGame()
    }
}

function renderGame() {
    cards.textContent = "Cards: "
    for (let i = 0; i < cardsData.length; i++) {
        cards.textContent += cardsData[i] + " "
        console.log(cardsData[i])
    }
    theSum.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
        messageEl.textContent = message

    } else if (sum === 21) {
        message = "Congrats!!!! You've got Blackjack "
        messageEl.className = "Won"
        player.chips += 100
        messageEl.textContent = message

        hasBlackJack = true
    } else {
        message = "You lost the game"
        messageEl.className = "lost"
        messageEl.textContent = message

        isAlive = false
    }

    playerChips.textContent = player.name + ": $" + player.chips

}
let newcard
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        newcard = random();
        sum += newcard;
        cardsData.push(newcard)
        renderGame()
    }
}