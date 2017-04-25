import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

class Account extends Component {
  static navigationOptions = {
    title: 'Update',
    tabBar: {
      label: '更新',
      icon: ({ focused, tintColor }) => (
        <Image
            resizeMode="center"
            style={[styles.icon, { tintColor: focused ? tintColor : 'gray' }]}
            source={require('../../asset/images/updateList.png')}
        />
      ),
    },
  };

  onPress = ()=>{
    this.props.navigation.navigate('Detail', {
      name: 'Account',
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>分类页</Text>
        <Text onPress={this.onPress}>Go to Detail</Text>
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
    width: 23,
    height: 32,
  },
});

export default Account
