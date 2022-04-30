import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

import Post from './Post';
import data from './data.json';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.toolbar}>
          <Text style={styles.title}>Latest Post</Text>
        </View>
        <FlatList
          numColumns={4}
          data={data.posts}
          renderItem={({item}) => Post(item)}
          style={styles.list}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toolbar: {
    backgroundColor: '#34495e',
    padding: 10,
    paddingTop: 20,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
  list: {
    backgroundColor: '#f0f3f4',
    flex: 1,
    paddingTop: 5,
    paddingBottom: 5,
    flexWrap: 'wrap',
  },
});
