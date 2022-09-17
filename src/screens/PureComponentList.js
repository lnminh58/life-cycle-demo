import React, {PureComponent} from 'react';
import {Text, View, FlatList} from 'react-native';

import Button from '../components/Button';
import PureComponentItem from '../components/PureComponentItem';
import styles from './styles';

export default class PureComponentList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {data: [1]};
  }
  onPressItem = item => () => {
    alert(item);
  };

  alertItem = item => {
    alert(item);
  };

  renderItem = ({item}) => {
    return (
      <PureComponentItem
        number={item}
        onPress={this.onPressItem(item)}
        // onPress={this.alertItem}
      />
    );
  };

  addItem = () => {
    const {data} = this.state;
    const newData = [...data, data[data.length - 1] + 1];
    this.setState({data: newData});
  };

  render() {
    const {data} = this.state;
    return (
      <View style={styles.container}>
        <Button text="add" onPress={this.addItem} />
        <FlatList
          data={data}
          renderItem={this.renderItem}
          keyExtractor={item => item.toString()}
        />
      </View>
    );
  }
}
