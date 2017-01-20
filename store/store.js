import { createStore } from 'redux';

// Import reducer
import PlayersReducer from '../reducers/players';

// Import data (for dev only)
// import PlayersData from '../data/players';

const defaultState = {
  players: []
};

const store = createStore(PlayersReducer, defaultState);

export default store;
