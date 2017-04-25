import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

class Detail extends Component {
  static navigationOptions = {
    title: '书详情页',
  };

  render() {
    const name = this.props.navigation.state.params.name;
    return (
      <View style={styles.container}>
        <Text>{`书详情页+${name}`}</Text>
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

export default Detail
