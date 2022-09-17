import React, {useState, useCallback} from 'react';
import {View, FlatList} from 'react-native';
import {last} from 'lodash';

import Button from '../components/Button';
import HookItem from '../components/HookItem';

import styles from './styles';

const HookList = () => {
  const [data, setData] = useState([1]);
  const onPressAdd = () => {
    setData(data => [...data, last(data) + 1]);
  };

  const onPressItem = item => alert(item);
  // const onPressItem = useCallback(item => alert(item), []);

  return (
    <View style={styles.container}>
      <Button text="add" onPress={onPressAdd} />
      <FlatList
        data={data}
        renderItem={({item}) => (
          <HookItem number={item} onPress={onPressItem} />
        )}
        keyExtractor={item => item.toString()}
      />
    </View>
  );
};

export default HookList;
