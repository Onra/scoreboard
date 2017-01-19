import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView, StatusBar } from 'react-native';
import { Provider } from 'react-redux';

// Import custom components
import Header from '../components/Header';
import SortedScoreList from '../containers/SortedScoreList';

import store from '../store/store';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBar
           backgroundColor='#ec4642'
           barStyle='light-content'
         />
          <Header />
          <SortedScoreList />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App;
