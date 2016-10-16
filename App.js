/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Image,
  Text,
  ListView,
  View
} from 'react-native';
import imdbLogo from './imdb.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  movieList: {
    flex: 0,
  },
  movieRow: {
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  movieHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  movieHeaderLabel: {
    marginLeft: 5,
  },
  movie: {
    textAlign: 'left',
    color: '#333333',
    marginLeft: 5,
  },
  movieImage: {
    width: 40,
    height: 40,
  }
});

const movies = [
  {
    title: "Star Wars",
    releaseYear: "1977",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png",
  },
  {
    title: "Back to the Future",
    releaseYear: "1985",
    image: "http://www.backtothefuture.com/img/logo.png",
  },
  {
    title: "The Matrix",
    releaseYear: "1999",
    image: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
  },
  {
    title: "Inception",
    releaseYear: "2010",
    image: "https://upload.wikimedia.org/wikipedia/en/1/18/Inception_OST.jpg",
  },
  {
    title: "Interstellar",
    releaseYear: "2014",
    image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_UY1200_CR69,0,630,1200_AL_.jpg",
  }
];

class App extends Component {
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

export default App;
