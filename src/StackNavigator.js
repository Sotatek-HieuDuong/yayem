import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SCREEN_NAME} from '@app/utils/Const';
import {navigationRef} from '@app/utils/NavigationHelpers';
//screen
import SplashScreen from '@app/screens/SplashScreen';
import LoginScreen from '@app/screens/login/LoginScreen';
import HomeScreen from '@app/screens/home/HomeScreen';
import SettingScreen from '@app/screens/setting/SettingScreen';

const MainStack = () => {
  const forFade = ({current}) => ({
    cardStyle: {
      opacity: current.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
      }),
    },
  });

  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={SCREEN_NAME.SPLASH_SCREEN} component={SplashScreen} />
      <Stack.Screen
        name={SCREEN_NAME.LOGIN_SCREEN} component={LoginScreen}
        options={{gestureEnabled: false, cardStyleInterpolator: forFade}}
      />
      <Stack.Screen
        name={SCREEN_NAME.HOME_SCREEN} component={HomeScreen}
        options={{gestureEnabled: false, cardStyleInterpolator: forFade}}
      />
      <Stack.Screen name={SCREEN_NAME.SETTING_SCREEN} component={SettingScreen} />
    </Stack.Navigator>
  );
};

const StackNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainStack />
    </NavigationContainer>
  );
};

export default StackNavigator;
