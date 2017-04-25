'use strict';

import React, { Component } from 'react'
import { StyleSheet, View, Image, Text ,Button} from 'react-native';
import { DrawerNavigator,StackNavigator } from 'react-navigation';

import MainNavigator from './MainNavigator';
import Home from './views/Home';
import Search from './views/Filter';
import SlideMenu from './Components/SlideMenu';

/**
 * Top-level navigator. Renders the application UI.
 */
const ConfigDrawerNavigator = DrawerNavigator(
    {
        Drawer: {screen: MainNavigator},
        Home: {screen: Home},
        Search: {screen: Search},
    },{
        // drawerWidth :200,
        drawerPosition :'left',
        //自定义Drawer界面
        contentComponent: SlideMenu,
    }
);

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});

export default ConfigDrawerNavigator;