import React, {Component} from 'react';
import {
  createStackNavigator,
  createAppContainer,
} from '@react-navigation/native';

import {HomeScreen, ProfileScreen, DetailsScreen} from './src/screens';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Profile: {
      screen: ProfileScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
