import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Nav from './nav/Nav';


// const SimpleApp = StackNavigator({
//   Home: { screen: HomeScreen }
//   // Home: { screen: HomeScreen }
// });

export default class App extends React.Component {
  render() {
    return <Nav />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});