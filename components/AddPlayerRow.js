import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

class AddScoreRow extends Component {

  constructor(props) {
    super(props);
    this.handleAddPlayer = this.handleAddPlayer.bind(this);
  }

  handleAddPlayer() {
    this.props.addPlayer('Toto', 55);
  }

  render() {
    return(
      <View style={styles.row}>
        <TouchableOpacity onPress={this.handleAddPlayer} style={styles.touchableZone}>
          <Text style={styles.addIcon}>{String.fromCharCode(10010)}</Text>
          <Text style={styles.label}>Add new score</Text>
        </TouchableOpacity>
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
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },

  touchableZone: {
    flex: 1,
    flexDirection: 'row'
  },

  addIcon: {
    fontSize: 16,
    color: '#4b4b53',
    marginRight: 20
  },

  label: {
    fontSize: 16,
    color: '#4b4b53'
  },
})

export default AddScoreRow;
