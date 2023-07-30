import React, { useEffect, useState } from 'react';

import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar, useColorScheme } from 'react-native';
import AnimatedSplash from 'react-native-animated-splash-screen';
//import { useDispatch } from 'react-redux';

import AppLogo from './assets/images/logo.png';
import Category from './screens/Category';
import SetWall from './screens/SetWall';
import TabNavigation from './TabNavigation';

const Stack = createStackNavigator();

const Navigation = () => {
 // const dispatch = useDispatch();
  const scheme = useColorScheme();

  const CustomDarkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      background: '#1f1f1f',
      card: '#292929',
    },
  };

  return (
    <>
      {/* <AnimatedSplash
        translucent
        logoImage={AppLogo}
        logoHeight={200}
        logoWidth={200}
        backgroundColor={scheme === 'dark' ? '#1f1f1f' : '#fff'}
      > */}
        <>
          <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle={scheme === 'dark' ? 'light-content' : 'dark-content'}
            style={{ marginBottom: 5 }}
          />
          <NavigationContainer theme={scheme === 'dark' ? CustomDarkTheme : DefaultTheme}>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="AppHome">
              {/* <Stack.Screen name="GetStarted" component={GetStarted} /> */}
              <Stack.Screen name="AppHome" component={TabNavigation} />
             <Stack.Screen name="SetWall" component={SetWall} /> 
              <Stack.Screen name="Category" component={Category} />
              {/* <Stack.Screen name="Credits" component={Credits} /> */}
            </Stack.Navigator>
          </NavigationContainer>
        </>
      {/* </AnimatedSplash> */}
    </>
  );
};

export default Navigation;
