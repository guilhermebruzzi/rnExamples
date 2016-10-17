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
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import movies from './data';
import styles from './styles';

class Details extends Component {
  onPress() {
    Actions.pop();
  }

  render() {
    const movie = movies[this.props.title];
    return (
      <View style={styles.container}>
        <View style={styles.movieInfo}>
          <Image source={{ uri: movie.image }} style={styles.movieImage} resizeMode="contain" />
          <Text style={styles.movieTitle}>{this.props.title}</Text>
          <Text style={styles.movieDescription}>{movie.description}</Text>
          <TouchableHighlight activeOpacity={0.5} underlayColor="#CCCCCC" style={styles.back} onPress={this.onPress.bind(this)}>
            <Text>Back</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default Details;
