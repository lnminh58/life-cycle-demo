import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/Home';
import HookList from '../screens/HookList';
import PureComponentList from '../screens/PureComponentList';
import ComponentList from '../screens/ComponentList';
import ComponentClock from '../screens/ComponentClock';
import HookClock from '../screens/HookClock';

const Stack = createNativeStackNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: '#353b48'},
          headerTitleStyle: {color: '#f5f6fa'},
        }}>
        <Stack.Screen name="Home" component={Home} options={{title: 'Home'}} />
        <Stack.Screen
          name="HookScreen"
          component={HookList}
          options={{title: 'Hook List Example'}}
        />
        <Stack.Screen
          name="PureComponentScreen"
          component={PureComponentList}
          options={{title: 'Pure List Component Example'}}
        />
        <Stack.Screen
          name="ComponentScreen"
          component={ComponentList}
          options={{title: 'Component List Example'}}
        />
        <Stack.Screen
          name="ComponentClockScreen"
          component={ComponentClock}
          options={{title: 'Component clock Example'}}
        />
        <Stack.Screen
          name="HookClockScreen"
          component={HookClock}
          options={{title: 'Hook Clock Example'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
