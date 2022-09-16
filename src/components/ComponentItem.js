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

import styles from './styles';

export default class ComponentList extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Text>Component Item</Text>
      </View>
    );
  }
}
