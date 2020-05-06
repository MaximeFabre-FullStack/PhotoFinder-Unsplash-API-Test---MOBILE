import {StyleSheet} from 'react-native';

const SignInStyle = StyleSheet.create({
  pageContainerSignIn: {
    flex: 1,
    backgroundColor: 'white',
  },

  logo: {
    width: 350,
    height: 200,
    backgroundColor: 'grey',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 50,
    borderColor: 'grey',
  },

  adresseMailInput: {
    borderColor: 'grey',
    borderWidth: 2,
    margin: 10,
    marginTop: 40,
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'white',
  },

  motDePasseInput: {
    borderColor: 'grey',
    borderWidth: 2,
    margin: 10,
    backgroundColor: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  sendSignInButton: {
    width: 150,
    height: 40,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 'auto',
    marginTop: 20,
    backgroundColor: 'white',
    textAlign: 'center',
  },
});

export default SignInStyle;
