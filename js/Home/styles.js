import {
  StyleSheet,
} from 'react-native';

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

export default styles;
