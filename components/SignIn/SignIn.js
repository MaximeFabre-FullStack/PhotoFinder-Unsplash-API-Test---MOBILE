import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import SignInStyle from './SignInStyle';

class SignIn extends Component {
  render() {
    return (
      <View style={SignInStyle.pageContainerSignIn}>
        <Image style={SignInStyle.logo} source={require('../img/logo.png')} />
        <TextInput style={SignInStyle.adresseMailInput} placeholder="mail" />
        <TextInput
          style={SignInStyle.motDePasseInput}
          placeholder="password"
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={SignInStyle.sendSignInButton}
          onPress={() => this.props.navigation.navigate('loading')}>
          <Text>Connexion</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default SignIn;
