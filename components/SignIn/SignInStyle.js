import {StyleSheet} from 'react-native';

const SignInStyle = StyleSheet.create({
  pageContainerSignIn: {
    flex: 1,
    backgroundColor: 'black',
  },

  logo: {
    width: 350,
    height: 200,
    backgroundColor: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 50,
    borderRadius: 50,
    borderColor: 'white',
  },

  adresseMailInput: {
    borderColor: '#AEAEAE',
    borderWidth: 2,
    margin: 10,
    marginTop: 40,
    borderRadius: 6,
    backgroundColor: 'white',
  },

  motDePasseInput: {
    borderColor: '#AEAEAE',
    borderWidth: 2,
    margin: 10,
    borderRadius: 6,
    backgroundColor: 'white',
  },

  sendSignInButton: {
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 'auto',
    marginTop: 20,
    borderRadius: 6,
    backgroundColor: 'white',
  },
});

export default SignInStyle;
