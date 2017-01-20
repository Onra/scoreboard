import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native';

class AddScoreRow extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isEditing: true
    }

    this.handleAddPlayer = this.handleAddPlayer.bind(this);
    this.handleSubmitPlayer = this.handleSubmitPlayer.bind(this);
  }

  handleAddPlayer() {
    this.setState({
      isEditing: true
    });
  }

  handleSubmitPlayer() {
    console.log("submit !");
    this.props.submitPlayer();
    this.setState({
      isEditing: false
    });
  }

  renderRow() {
    if (this.state.isEditing) {
      return (
        <View style={styles.editRow}>
          <Text style={styles.icon}>{String.fromCharCode(10140)}</Text>
          <TextInput
            ref='nameInput'
            placeholder='Name'
            blurOnSubmit={false}
            returnKeyType='next'
            autoCorrect={false}
            maxLength={20}
            autoFocus={true}
            style={styles.nameInput}
            value={this.props.nameValue}
            onChangeText={this.props.onNameChange}
            onSubmitEditing={(event) => {
              this.refs.scoreInput.focus();
            }}
          />

          <TextInput
            ref='scoreInput'
            placeholder='Score'
            blurOnSubmit={false}
            returnKeyType='done'
            autoCorrect={false}
            maxLength={10}
            keyboardType='numeric'
            value={this.props.scoreValue}
            onChangeText={this.props.onScoreChange}
            style={styles.scoreInput}
          />

          <Button
            onPress={this.handleSubmitPlayer}
            title='Ok'
            color='#ec4642'
            style={styles.addButton}
          />
        </View>
      );
    }

    return (
      <View style={styles.row}>
        <TouchableOpacity onPress={this.handleAddPlayer} style={styles.touchableZone}>
          <Text style={styles.icon}>{String.fromCharCode(10010)}</Text>
          <Text style={styles.label}>Add new score</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    {return this.renderRow()}
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

  editRow: {
    paddingHorizontal: 10,
    height: 50,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },

  touchableZone: {
    flex: 1,
    flexDirection: 'row'
  },

  icon: {
    fontSize: 16,
    color: '#4b4b53',
    marginRight: 20
  },

  label: {
    fontSize: 16,
    color: '#4b4b53'
  },

  nameInput: {
    flex: 3,
    height: 50,
    marginLeft: 20,
    borderRightWidth: 1,
    borderRightColor: '#ddd'
  },

  scoreInput: {
    flex: 1,
    height: 50
  },

  addButton: {
    flex: 1,
    fontSize: 16
  }
})

export default AddScoreRow;
