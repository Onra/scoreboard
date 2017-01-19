import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, ListView } from 'react-native';

// Import data (for dev only)
import ScoresData from './data/scores';

// Import custom components
import Header from './components/Header';
import AddScoreRow from './components/AddScoreRow';

class App extends Component {

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      scores: ScoresData,
      dataSource: ds.cloneWithRows(ScoresData.sort((player1, player2) => {
        if (player1.score < player2.score) {
          return 1;
        }
        if (player1.score > player2.score) {
          return -1;
        }
        return 0;
      }))
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Header></Header>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <AddScoreRow score={rowData} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        paddingTop: 16
      }
    })
  }
})

export default App;
