import React, { Component } from 'react';
import { View, Button } from 'react-native';

class DeleteAllRow extends Component {
  render() {
    return (
      <View>
        <Button
          onPress={this.props.deleteAllPlayers}
          title='Delete all'
          color='#ec4642'
        />
      </View>
    );
  }
}

export default DeleteAllRow;
