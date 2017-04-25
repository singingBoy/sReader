import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

class Home extends Component {
  static navigationOptions = {
    title: 'Home',
    tabBar: {
      label: '书架',
      icon : ({ tintColor }) => (
        <Image
          style={[styles.icon, { tintColor: tintColor }]}
          source={require('../../asset/images/house.png')}
        />
      ),
    },
    drawer:{
      label: 'Home',
      icon:({ tintColor }) => (
          <Image
              source={require('../../asset/images/house.png')}
              style={[styles.tabIcon, {tintColor: tintColor}]}
          />
      ),
    },
  };

  onPress = ()=>{
    this.props.navigation.navigate('Detail', {
      name: 'Home',
    });
  };

  render() {
    console.log('home',this.props);
    return (
      <View style={styles.container}>
        <Text>书架</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 32,
    height: 32,
  },
});

export default Home
