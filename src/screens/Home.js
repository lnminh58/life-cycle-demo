import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';

import Button from '../components/Button';
import styles from './styles';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  navigateToScreen = screenName => () => {
    const {navigation} = this.props;
    navigation.navigate(screenName);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.sectionText}>Clock Example</Text>
        <Button
          text="Component"
          onPress={this.navigateToScreen('ComponentClockScreen')}
        />
        <Button
          text="Function"
          onPress={this.navigateToScreen('HookClockScreen')}
        />
        <Text style={styles.sectionText}>List Example</Text>
        <Button
          text="Component"
          onPress={this.navigateToScreen('ComponentScreen')}
        />
        <Button
          text="Pure Component"
          onPress={this.navigateToScreen('PureComponentScreen')}
        />
        <Button
          text="Function Component"
          onPress={this.navigateToScreen('HookScreen')}
        />
      </View>
    );
  }
}
