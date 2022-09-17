import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';
import {last} from 'lodash';

import Button from '../components/Button';
import ComponentItem from '../components/ComponentItem';
import styles from './styles';

export default class ComponentList extends Component {
  constructor(props) {
    super(props);

    this.state = {data: [1]};
  }
  onPressItem = item => () => {
    alert(item);
  };

  renderItem = ({item}) => {
    return <ComponentItem number={item} onPress={this.onPressItem(item)} />;
  };

  addItem = () => {
    const {data} = this.state;
    const newData = [...data, last(data) + 1];
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
