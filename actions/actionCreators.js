export function addPlayer(name, score) {
  console.log("ADD_PLAYER ACTION TRIGGERED", name, score);
  return {
    type: 'ADD_PLAYER',
    player: {
      name,
      score
    }
  };
}
