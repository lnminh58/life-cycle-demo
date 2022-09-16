import React, {PureComponent} from 'react';
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

export default class PureComponentList extends PureComponent {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Text>Pure Component List</Text>
      </View>
    );
  }
}
