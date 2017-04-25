import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

class Search extends Component {
  static navigationOptions = {
    title: 'Filter',
    tabBar: {
      label: '分类',
      icon: ({ focused, tintColor }) => (
        <Image
            resizeMode="center"
            style={[styles.icon, { tintColor: focused ? tintColor : 'gray' }]}
            source={require('../../asset/images/search2.png')}
        />
      ),
    },
  };

  onPress = ()=>{
    this.props.navigation.navigate('Detail', {
      name: 'Search',
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
    marginTop: 3,
    width: 32,
    height: 29,
  },
});

export default Search
