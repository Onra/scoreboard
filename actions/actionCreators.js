export function addPlayer(name, score) {
  return {
    type: 'ADD_PLAYER',
    player: {
      name,
      score
    }
  };
}

export function removeAllPlayers() {
  return {
    type: 'CLEAN_PLAYERS'
  };
}
