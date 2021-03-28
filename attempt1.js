const plays = new Map([
  ['SB',25],
  ['DB',50],
  [null,0],
])

const ingresar_jugada = (name, score, play) => {
  const plays_print = play.map(x => plays.get(x) ? ' un '.concat(x, ' (', plays.get(x), ' puntos)') : 
  'obtuvo un '.concat(x[1], ' con x', x[0], ' (', x[0]*x[1], ' puntos)') )
  //console.log(plays_print)
  const new_score = play.map(x => plays.get(x) ? plays.get(x) : x[0]*x[1]).reduce((x,y) => x+y)
  console.log(name, 'obtuvo', plays_print, 'de', score, 'queda con', score-new_score  )
  return score-new_score
  
}

const init_game = (player1, player2) => {
  const initial_score = 501
  let players = new Map([
  [player1,initial_score],
  [player2, initial_score],
  ]) 
  return players
}

const play_game = (player1, player2) => {
  let players = init_game(player1, player2)

  // Imprimir los items del dict
  //for (var [clave, valor] of players.entries()) {
   // console.log(clave + " = " + valor);
  // }
  console.log("Juego inicializado con jugadores", player1, "y", player2)
  let current = player2;
  while (players.get(player1) > 0 && players.get(player2) > 0) {
    current = (current === player2) ? player1 : player2
    //const play = prompt("Ingrese lanzamientos de ", player1);
    play = ['DB', [3,20], [3,19]]
    players.set(current, ingresar_jugada(current, players.get(current), play))
  }
}

players = play_game('Martin', 'Fer')
