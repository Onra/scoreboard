import React, { Component } from 'react';
import { View, StyleSheet, Platform } from 'react-native';

// Import custom components
import Header from './components/Header';
import AddScore from './components/AddScore';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      scores: []
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Header></Header>
        <AddScore></AddScore>
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
