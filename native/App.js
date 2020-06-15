import React from 'react';
import codePush from "react-native-code-push";

import { StatusBar } from 'react-native';

import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';

import { getStore } from 'common/reducers';

import { Initial } from 'components/Initial';
import AsyncStorage from '@react-native-community/async-storage';
import { useOnesignal } from './src/hooks/onesignal';
import { GettingStarted } from './src/components/GettingStarted';
import { MonorepoIntro } from './src/components/MonorepoIntro';

const Stack = createStackNavigator();
const { store } = getStore(AsyncStorage);

const App = () => {
  useOnesignal();

  return (
    <Provider store={store}>
      <StatusBar barStyle='dark-content' />
      <Initial />
      <NavigationContainer screenOptions={{ headerShown: false }}>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={GettingStarted} />
          <Stack.Screen name='Intro' component={MonorepoIntro} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default codePush()(App);
