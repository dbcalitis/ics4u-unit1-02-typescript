/**
 * The program shows how to get input
 *   and deal with numbers
 * By:      Daria Bernice Calitis
 * Version: 1.0
 * Since:   2022-09-13
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()

// Constant
const SPEED_LIGHT = 2.998 * 10 ** 8

// Input object's mass
const mass = prompt('Enter the mass of an object in kilograms: ')
const massFloat = parseFloat(mass)

// Calculating energy
const energy = (massFloat * SPEED_LIGHT) ** 2

// Prints out mass with energy
if (!isNaN(energy)) {
  console.log(`${mass} kg of mass produce ${energy}J of energy`)
} else {
  console.log('Invalid Input')
}

console.log('\nDone.')
