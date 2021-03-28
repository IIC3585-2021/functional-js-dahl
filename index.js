const prompt = require('prompt-sync')({sigint: true});
const _ = require('lodash');

const specialCases = {'SB': 25, 'DB': 50}

/**
 * Receive a player and their result and update score. 
 * @param {String} playerName 
 * @param {Number} currentScore 
 * @param {Array} dartsResults 
 * @returns {Number} name and updated player score
 */
const new_play = (playerName, currentScore, dartsResults) => {
  const updatedResults = dartsResults.map((item) => item === 'SB' ? 25 : item === 'DB' ? 50 : item === null ? 0 : item[0]*item[1])
  const sumUpdatedResults = updatedResults.reduce((x,y)=> x+y)
  const updatedScore = Math.abs(currentScore - sumUpdatedResults)//currentScore - updatedResults 
  console.log(`${playerName} quedó con ${updatedScore}`)
  return updatedScore
}

/**
 * Intialize the game with the given players
 * @param {Array} players 
 * @returns {Object} Object with names and initial scores.
 */
const play_game = (players) => _.transform(players, (result, player)=>(result[player] = 501)) 

let winner = false;
 
let players = JSON.parse(prompt('Inserte jugadores en el formato ["Jugador1", "Jugador2"]'));
console.log(`Juego inicializado con jugadores: ${players.join(" ")}`)


while (!winner) {
  const initializedPlayers = play_game(players)
  for (let player in initializedPlayers) {
    let play = JSON.parse(prompt(`Ingrese jugada de ${player}`))
    const result = new_play(player, initializedPlayers[player], play)
    initializedPlayers[player] = result
    if(result === 0 ) {
      console.log(`${player} quedó en 0 puntos y gana el juego`)
      winner=true
    }
  } 
}