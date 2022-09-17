import React, {PureComponent} from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './styles';

export default class ComponentItem extends PureComponent {
  render() {
    const {onPress, number} = this.props;
    console.log('Pure Component Item: ', number);

    return (
      <TouchableOpacity
        // onPress={() => onPress(number)}
        onPress={onPress}
        style={styles.itemContainer}>
        <Text style={styles.text}>{number}</Text>
      </TouchableOpacity>
    );
  }
}
