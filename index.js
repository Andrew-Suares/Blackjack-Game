// Global Scope Variables
let firstCard = 10
let secondCard = 11
const sum = firstCard + secondCard
let message = ''

// State of the start of Game
let hasBlackjack = false
let isAlive = true

// Logic of the game
if (sum <= 20) {
	message = 'Do you want a card'
} else if (sum === 21) {
	message = 'You have won the game'
	hasBlackjack = true
} else {
	message = 'you busted out'
	isAlive = false
}

console.log(message)
