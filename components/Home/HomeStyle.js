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
    opacity: 0.8,
    paddingBottom: 7,
  },

  inputText: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 70,
    height: 65,
    borderColor: 'grey',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 150,
    marginTop: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 100,
    paddingBottom: 20,
    paddingTop: 20,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
});

export default styles;
