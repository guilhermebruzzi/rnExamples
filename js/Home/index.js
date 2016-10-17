/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  Image,
  Text,
  ListView,
  View
} from 'react-native';

import { imdbLogo } from './assets/';
import movies from './data';
import styles from './styles';

class Home extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.title !== r2.title});
    this.state = {
      dataSource: ds.cloneWithRows(movies),
    };
  }

  renderHeader() {
    return (
      <View style={styles.movieHeader}>
        <Image source={imdbLogo} style={{ width: 140, height: 68 }} />
        <Text style={[styles.movie, styles.movieHeaderLabel]}>TOP LIST</Text>
      </View>
    );
  }

  renderRow(rowData) {
    const image = (rowData.image) ? <Image style={styles.movieImage} resizeMode="contain" source={{ uri: rowData.image }} /> : null;
    return (
      <View style={styles.movieRow}>
        {image}
        <Text style={styles.movie}>{rowData.title} - {rowData.releaseYear}</Text>
      </View>
    );
  }

  render() {
    const platform = Platform.OS;
    return (
      <View style={styles.container}>
        <ListView
          style={styles.movieList}
          dataSource={this.state.dataSource}
          renderHeader={this.renderHeader.bind(this)}
          renderRow={this.renderRow.bind(this)}
        />
      </View>
    );
  }
}

export default Home;
