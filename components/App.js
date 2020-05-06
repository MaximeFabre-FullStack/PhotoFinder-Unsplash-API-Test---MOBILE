import {
  createAppContainer,
  createSwitchNavigator,
  SafeAreaView,
} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Home from './Home/Home';
import Loading from './Loading/Loading';
import SignIn from './SignIn/SignIn';
import SignOut from './SignOut/SignOut';
import Random from './RandomPicture/RandomPicture';
import ResultPictures from './Home/ResultPictures/ResultPictures';
import {ScrollView, Image} from 'react-native-gesture-handler';
import React, {Component} from 'react';

const appDrawer = createDrawerNavigator(
  {
    Home: Home,
    Result: ResultPictures,
    Random: Random,
    SignOut: SignOut,
  },
  {
    initialRouteName: 'Home',
    drawerBackgroundColor: 'white',
    contentOptions: {
      activeTintColor: 'purple',
    },
  },
);

const App = createAppContainer(
  createSwitchNavigator(
    {
      login: SignIn,
      loading: Loading,
      app: appDrawer,
      logout: SignOut,
    },
    {
      initialRouteName: 'login',
    },
  ),
);

export default App;
