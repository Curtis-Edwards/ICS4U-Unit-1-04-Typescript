/*
 * This is a program that calculates the total cook time based on
 * the lunch item and number of lunch items
 *
 * @author  Curtis Edwards
 * @version 1.0
 * @since   2024-02-22
 */

import { createPrompt } from 'bun-promptx'

// constants & variables
const randomNumber = Math.floor((Math.random() * 6) + 1);
let totalGuesses = 0

while (1) {
  // input
  const userGuess = createPrompt("Are you heating sub, pizza, or soup?(lowercase): ")
  const userGuessInt = parseInt(userGuess.value || "-1")
  // error check
  if (isNaN(userGuessInt) == true || userGuessInt < 1 || userGuessInt > 6) {
    console.log("Invalid input. (This won’t count as a guess)")
  } else {
    // process
    if (userGuessInt > randomNumber) {
      totalGuesses += 1
      console.log(`You guessed too low, try again!`)
    } else if (userGuessInt < randomNumber) {
      totalGuesses += 1
      console.log(`You guessed too high, try again!`)
    } else {
      // output
      console.log(`Correct!\nTotal guesses: ${totalGuesses}')
      break
    }
  }
}

console.log("\nDone.")
