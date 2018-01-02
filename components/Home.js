import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, PropTypes } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Nav from '../nav/Nav';
import Card from './Card';

class Home extends React.Component{
  constructor(props, context){
    super(props, context);
    this.state = {};
    this.buttonPress = this.buttonPress.bind(this);
  }

  componentDidMount() {
    
  }

  widget(){
    return(
          <View>    
            <TouchableOpacity
              onPress={() => navigate('Detail')}
            >
            <Image 
              source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
              style={{width: 400, height: 400}} />
            </TouchableOpacity> 
          </View>
      )
  }

  buttonPress(){         
      this.props.playButtonClicked(this.props.drill)
  }


  render(){
    const drillProps = this.props;  
    const { navigate } = this.props.navigation; 
    return(
      <View>
        <ScrollView> 
          <View>    
            <TouchableOpacity
              onPress={() => navigate('Detail')}
            >
            <Image 
              source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
              style={{width: 400, height: 400}} />
            </TouchableOpacity> 
          </View>
          <Card/>        
          {this.widget()}
        </ScrollView>
      </View>
    );
  }
}

Home.propTypes={
  // author: PropTypes.string,  
  // name: PropTypes.string,  
  // description: PropTypes.string,  
  // playButtonClicked: PropTypes.func,
};

export default Home;

