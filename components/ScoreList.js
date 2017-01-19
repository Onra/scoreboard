import React, { Component } from 'react';
import { ListView } from 'react-native';

// Import custom components
import AddPlayerRow from './AddPlayerRow';
import ScoreRow from './ScoreRow';

class ScoreList extends Component {

  constructor(props) {
    super(props);

    // const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    // const dataSource = ds.cloneWithRows(this.props.players);

    const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: dataSource.cloneWithRows(this.props.players)
    }

    this.handleAddPlayer = this.handleAddPlayer.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps);
    if (nextProps.players !== this.props.players) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.players)
      });
    }
  }

  handleAddPlayer(name, score) {
    this.props.addPlayer(name, score);
    // console.table(this.props.players);
    // this.dataSource = this.ds.cloneWithRows(this.props.players);
  }

  render() {
    return (
      <ListView
        renderHeader={() => <AddPlayerRow addPlayer={this.handleAddPlayer} />}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <ScoreRow score={rowData} />}
      />
    );
  }
}

export default ScoreList;
