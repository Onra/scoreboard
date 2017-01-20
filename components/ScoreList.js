import React, { Component } from 'react';
import { ListView } from 'react-native';

// Import custom components
import AddPlayerRow from './AddPlayerRow';
import ScoreRow from './ScoreRow';

class ScoreList extends Component {

  constructor(props) {
    super(props);

    const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      nameValue: '',
      scoreValue: '',
      dataSource: dataSource.cloneWithRows(this.props.players)
    }

    this.handleAddPlayer = this.handleAddPlayer.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.players !== this.props.players) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.players)
      });
    }
  }

  handleAddPlayer() {
    this.props.addPlayer(this.state.nameValue, this.state.scoreValue);
    this.setState({
      nameValue: '',
      scoreValue: ''
    });
  }

  render() {
    return (
      <ListView
        keyboardShouldPersistTaps='always'
        renderHeader={() => {
          return (
            <AddPlayerRow
              submitPlayer={this.handleAddPlayer}
              nameValue={this.state.nameValue}
              onNameChange={(value) => this.setState({nameValue: value}) }
              scoreValue={this.state.scoreValue}
              onScoreChange={(value) => this.setState({scoreValue: value}) }
            />
          );
        }}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <ScoreRow score={rowData} />}
      />
    );
  }
}

export default ScoreList;
