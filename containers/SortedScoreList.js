import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

import ScoreList from '../components/ScoreList';

const getSortedScores = (scores) => {
  return scores.sort((player1, player2) => {
    score1 = parseInt(player1.score, 10);
    score2 = parseInt(player2.score, 10);
    if (score1 < score2) {
      return 1;
    }
    if (score1 > score2) {
      return -1;
    }
    return 0;
  });
}

const mapStateToProps = (state) => {
  return {
    players: getSortedScores(state.players)
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

const SortedScoreList = connect(mapStateToProps, mapDispatchToProps)(ScoreList);

export default SortedScoreList;
