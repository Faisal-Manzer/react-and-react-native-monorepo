import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider, useDispatch } from 'react-redux';

import { store } from 'common/reducers';
import { sessionStarted } from 'common/actions/demo';

import { GettingStarted } from './src/components/GettingStarted';
import { MonorepoIntro } from './src/components/MonorepoIntro';

const Stack = createStackNavigator();

const Initial = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    SplashScreen.hide();
    dispatch(sessionStarted());
  }, []);

  return null;
};


const App = () => (
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


export default App;
