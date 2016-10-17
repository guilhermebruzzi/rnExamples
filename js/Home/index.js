/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  TouchableHighlight,
  Image,
  Text,
  ListView,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

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

  onPress(movie) {
    Actions.details({ title: movie.title });
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
      <TouchableHighlight activeOpacity={0.5} underlayColor="#CCCCCC" onPress={() => this.onPress(rowData)}>
        <View style={styles.movieRow}>
          {image}
          <Text style={styles.movie}>{rowData.title} - {rowData.releaseYear}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
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
