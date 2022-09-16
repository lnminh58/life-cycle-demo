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

const HookItem = () => {
  return (
    <View style={styles.container}>
      <Text>Hook Item</Text>
    </View>
  );
};

export default HookItem;
