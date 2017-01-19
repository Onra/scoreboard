function players(state = [], action) {
  switch (action.type) {
    case 'ADD_PLAYER':
      return {
        ...state,
        players: [
          ...state.players,
          action.player
        ]
      }
      break;
    case 'CLEAN_PLAYERS':
      return [];
    default:
      return state;
  }

  return state;
}

export default players;
