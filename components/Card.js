import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Nav from '../nav/Nav';

export default class Card extends React.Component {
  render() {    

    return (
      <View style={styles.container}>        
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Detail')}
        >
        <Image 
          source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
          style={{width: 400, height: 400}} />
        </TouchableOpacity>   
        
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
    marginVertical: 1,
  },
});


