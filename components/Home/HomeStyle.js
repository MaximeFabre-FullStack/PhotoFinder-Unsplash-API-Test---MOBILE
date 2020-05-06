import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  safeAreaViewStyle: {
    flex: 1,
    color: 'black',
  },

  appContainer: {
    flex: 1,
  },

  appContainer1: {
    flex: 1,
    width: 71,
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    opacity: 0.8,
    backgroundColor: 'black',
  },

  titleText: {
    color: 'white',
    fontSize: 34,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: 'black',
    opacity: 0.5,
  },

  inputText: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 40,
    height: 50,
    borderColor: 'grey',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 5,
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 200,
    marginTop: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 100,
  },

  button1: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 70,
    marginTop: 15,
    marginLeft: 10,
    marginRight: 'auto',
    borderRadius: 6,
  },
  marginTopButton: {
    marginTop: -10,
  },
});

export default styles;
