import React, {JSX} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {MainScreen, CameraScreen} from './screens';
import {RootStackParams, routeNames} from './navigator/routs';

const RootStack = createNativeStackNavigator<RootStackParams>();

export const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <RootStack.Navigator initialRouteName={routeNames.HOME}>
          <RootStack.Screen name={routeNames.HOME} component={MainScreen} />
          <RootStack.Screen name={routeNames.CAMERA} component={CameraScreen} />
        </RootStack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
