import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './styles';

export default class ComponentItem extends Component {
  // shouldComponentUpdate = nextProps => {
  //   const {number} = this.props;
  //   return nextProps.number !== number;
  // };

  render() {
    const {onPress, number} = this.props;
    console.log('Component Item: ', number);

    return (
      <TouchableOpacity onPress={onPress} style={styles.itemContainer}>
        <Text style={styles.text}>{number}</Text>
      </TouchableOpacity>
    );
  }
}
