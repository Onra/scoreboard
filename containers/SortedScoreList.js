import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

import ScoreList from '../components/ScoreList';

const getSortedScores = (scores) => {
  return scores.sort((player1, player2) => {
    if (player1.score < player2.score) {
      return 1;
    }
    if (player1.score > player2.score) {
      return -1;
    }
    return 0;
  });
}

const mapStateToProps = (state) => {
  console.log('mapStateToProps', state);
  return {
    players: getSortedScores(state.players)
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

const SortedScoreList = connect(mapStateToProps, mapDispatchToProps)(ScoreList);

export default SortedScoreList;
