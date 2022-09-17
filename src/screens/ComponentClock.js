import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';
import moment from 'moment';
import styles from './styles';

export default class ComponentClockScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {counter: 0};
    console.log('ComponentClockScreen init');
  }

  // static getDerivedStateFromProps(nextProps) {
  //   console.log('getDerivedStateFromProps', nextProps);
  //   return null;
  // }

  componentDidMount() {
    console.log('ComponentClockScreen Did Mount');
    this.interval = setInterval(this.increaseCounter, 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const {counter} = nextState;

    // if (counter % 2 === 0) {
    //   return false;
    // }

    console.log('ComponentClockScreen Should Component Update');

    return true;
  }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log('ComponentClockScreen Get Snapshot Before Update');
  //   return null;
  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('ComponentClockScreen Did Update');
  }
  componentWillUnmount() {
    console.log('ComponentClockScreen Will Unmount');
    clearInterval(this.interval);
  }

  increaseCounter = () => {
    const {counter} = this.state;
    this.setState({counter: counter + 1});
  };

  render() {
    const {counter} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.clockText}>
          {moment().startOf('d').add(counter, 's').format('HH:mm:ss')}
        </Text>
      </View>
    );
  }
}
