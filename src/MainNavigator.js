'use strict';

/**
 * This is an example React Native app demonstrates ListViews, text input and
 * navigation between a few screens.
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, View, Image, Text ,Button, TouchableHighlight} from 'react-native'

import HomeScreenTabNavigator from './HomeScreenTabNavigator';

import Detail from './views/pages/Detail';
import Search from './views/pages/Search';

let openDrawer = null;// 打开 Drawer 方法

export default class MainNavigator extends Component{

    // 构造
    constructor(props) {
        super(props);
    }

    render() {
        const {navigate} = this.props.navigation;
            openDrawer = ()=>navigate('DrawerOpen');
        return(
            <HomeNavigator screenProps={{rootNavigator:navigate}}/>
        )
    };
}

/*
* 创建 StackNavigator
* */
const HomeNavigator = StackNavigator(
    {
        Home: {screen: HomeScreenTabNavigator, a:'1'},
        Detail: {screen: Detail,},
        Search: {screen: Search,},
    },{
        initialRouteName: 'Home',
        mode: 'modal',
        headerMode: 'screen',
        cardStyle: {
            backgroundColor: 'rgba(230, 229, 229, 0.5)',
        },
        onTransitionStart: (navigation)=>{/*页面跳转开始时候调用*/},
    }
);

HomeScreenTabNavigator.navigationOptions = {
    header: (navigation)=>{
        let titleName = '书架';
        const routeName = getCurrentScreen(navigation.state);
        switch (routeName){
            case 'Home':      titleName = '书架';break;
            case 'Filter':    titleName = '分类';break;
            case 'Update':    titleName = '更新';break;
        }
        return{
            title: renderTitle(titleName, navigation),
            style:{
                backgroundColor: '#01c497',//TODO titleBar背景色
            }
        }
    }
};

/*Detail统一头部渲染*/
Detail.navigationOptions = {
    header: ()=> ({
        title: <Text> {`<`} </Text>,
        right : <Text> {`>`} </Text>,
        style:{
            backgroundColor: '#01c497',//TODO 跳转页 titleBar背景色
            // height: 90,
        }
    })
};

/*HomeScreenTabNavigator统一头部渲染*/
const renderTitle = (titleName, navigation)=>{
    const onPressConfig = ()=>{
        openDrawer();
    };
    const onPressSearch = ()=>{
        navigation.navigate('Search',{name:'主页跳转'});
    };
    return(
        <View style={styles.titleHeader}>
            <View style={[styles.labelView,{flex: 5}]}>
                <Text style={styles.titleLabel}>{titleName}</Text>
            </View>

            <TouchableHighlight onPress={onPressConfig} style={styles.configTouch}>
                <Image style={styles.configImage} source={require('../asset/images/icon-standings.png')} />
            </TouchableHighlight>

            <TouchableHighlight onPress={onPressSearch}>
                <Image style={styles.searchImage} source={require('../asset/images/search.png')} />
            </TouchableHighlight>
        </View>
    )
};

/*获取当前路由Name，解决routers获取延迟问题
* 参考：https://github.com/react-community/react-navigation/blob/master/docs/guides/Screen-Tracking.md#screen-tracking
* */
function getCurrentScreen(navigationState) {
    if (!navigationState) {
        return null;
    }
    const route = navigationState.routes[navigationState.index];
    if (route.routes) {
        return getCurrentScreen(route);
    }
    return route.routeName;
}

/*样式styles*/
const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
    titleHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
    },
    configTouch: {marginRight:20,},
    configImage: {
        width: 20,
        height: 20,
    },
    searchTouch: {},
    searchImage:{
        width: 20,
        height: 20,
    },
    labelView: {
        flexDirection: 'row',
    },
    titleLabel: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },


});