import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Nav from './nav/Nav';

export default class App extends React.Component {
  render() {
    return <Nav />;
  }
}
