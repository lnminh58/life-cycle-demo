import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import moment from 'moment';
import styles from './styles';

const HookClockScreen = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(
      'HookClockScreen as Did Update: counter has been changed',
      counter,
    );

    return () => {
      console.log(
        'HookClockScreen as Will Update: counter will be changed',
        counter,
      );
    };
  }, [counter]);

  useEffect(() => {
    console.log('HookClockScreen as Did Mount');
    const timer = setInterval(() => {
      setCounter(counter => counter + 1);
    }, 1000);

    return () => {
      console.log('HookClockScreen as Will Unmount');
      clearInterval(timer);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.clockText}>
        {moment().startOf('d').add(counter, 's').format('HH:mm:ss')}
      </Text>
    </View>
  );
};

export default HookClockScreen;
