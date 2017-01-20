export function addPlayer(name, score) {
  return {
    type: 'ADD_PLAYER',
    player: {
      name,
      score
    }
  };
}
