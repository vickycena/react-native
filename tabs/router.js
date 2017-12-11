import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import {Avatar} from 'react-native-elements';
import { EvilIcons,Entypo,Feather,Octicons,Ionicons,FontAwesome} from 'react-native-vector-icons';
import {DrawerNavigator,DrawerLayoutAndroid,TabNavigator} from 'react-navigation';

import home from './home.js';
import search from './FScreen.js';



export const Tabs = TabNavigator({
  home: {
    screen: home,
  },
  search: {
    screen: search,
  },
});