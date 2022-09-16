import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HookList from '../screens/HookList';
import PureComponentList from '../screens/PureComponentList';
import ComponentList from '../screens/ComponentList';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HookList" component={HookList} />
        <Stack.Screen name="PureComponentList" component={PureComponentList} />
        <Stack.Screen name="ComponentList" component={ComponentList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
