import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './styles';

const HookItem = ({onPress, number}) => {
  console.log('HookItem: ', number);

  return (
    <TouchableOpacity
      onPress={() => onPress(number)}
      style={styles.itemContainer}>
      <Text style={styles.text}>{number}</Text>
    </TouchableOpacity>
  );
};

// export default HookItem;
//
export default React.memo(HookItem);

// export default React.memo(HookItem, (prevProps, nextProps) => {
//   return prevProps.number === nextProps.number;
// });
