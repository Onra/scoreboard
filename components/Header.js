import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>CGI</Text>
        <Text style={styles.subtitle}>LEADERBOARD</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ec4642',
    height: 80,
    ...Platform.select({
      ios: {
        paddingTop: 16
      }
    })
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },

  subtitle: {
    color: '#fff'
  }
})

export default Header;
