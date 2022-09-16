import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import NavigationContainer from './routes';

import styles from './screens/styles';
export default class App extends Component {
  state = {};
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <NavigationContainer />;
      </SafeAreaView>
    );
  }
}
