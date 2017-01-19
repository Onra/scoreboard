import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class AddScoreRow extends Component {
  render() {
    return(
      <View style={styles.row}>
        <Text style={styles.name}>{this.props.score.name}</Text>
        <Text style={styles.score}>{this.props.score.score}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 10,
    height: 50,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  name: {
    fontSize: 16,
    color: '#4b4b53'
  },

  score: {
    fontSize: 16,
    color: '#ec4642'
  }
})

export default AddScoreRow;
