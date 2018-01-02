import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Nav from '../nav/Nav';
import Card from './Card';

export default class App extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>   
        <ScrollView>     
          <TouchableOpacity
            onPress={() => navigate('Detail')}
          >
            <Image 
              source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
              style={{width: 400, height: 400}} />
          </TouchableOpacity>  
          <Card/>
          <Card/>
          <Card/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});