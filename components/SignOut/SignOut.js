import React, {Component} from 'react';
import {Text, View} from 'react-native';
import SignOutStyle from './SignOutStyle';

class SignOut extends Component {
  static navigationOptions = {
    drawerLabel: 'Sign - out',
  };

  componentDidMount() {
    setTimeout(() => {
      this.goBack();
    }, 3000);
  }

  goBack = () => {
    return this.props.navigation.navigate('login');
  };

  render() {
    return (
      <View style={SignOutStyle.pageContainerSignOut}>
        <Text style={SignOutStyle.textSignOut}>
          Merci d'avoir essayé notre app!
        </Text>
      </View>
    );
  }
}

export default SignOut;
