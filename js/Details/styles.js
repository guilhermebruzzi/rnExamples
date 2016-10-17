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
  back: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 3,
  },
  movieInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  movieImage: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  movieTitle: {
    fontSize: 20,
    color: '#333333',
    textAlign: 'center',
    backgroundColor: 'transparent',
    marginTop: 20,
  },
  movieDescription: {
    fontSize: 16,
    padding: 16,
    color: '#333333',
    textAlign: 'left',
    marginTop: 20,
  },
});

export default styles;
