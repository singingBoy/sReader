'use strict';
import { TabNavigator, TabView } from 'react-navigation';

import Home from './views/Home';
import Update from './views/Update';
import Filter from './views/Filter';

/**
 * Screen with tabs shown on app startup.
 */
const HomeScreenTabNavigator = TabNavigator(
    {
        Home: {screen: Home,},
        Update: {screen: Update,},
        Filter: {screen: Filter,},
    },{
        initialRouteName: 'Home',
        tabBarComponent: TabView.TabBarBottom,
        order:['Filter','Home','Update',],
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: true,
        lazyLoad: true,
        tabBarOptions: {
            showIcon: true,
            activeTintColor: '#01c497', //TODO tabBar选中颜色
            style: {
                backgroundColor: 'rgba(230, 229, 229, 0.5)',
            },
        },
    },
);

export default HomeScreenTabNavigator;