import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';

import NavigationContainer from './routes';

import styles from './screens/styles';
export default class App extends Component {
  state = {};
  render() {
    return (
      <>
        <SafeAreaView style={[styles.container, {backgroundColor: '#353b48'}]}>
          <NavigationContainer />
        </SafeAreaView>
        <SafeAreaView style={{backgroundColor: '#f5f6fa'}} />
      </>
    );
  }
}
