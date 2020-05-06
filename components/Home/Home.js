/**
 * TODO find a good UI / UX library interface
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
} from 'react-native';
import styles from './HomeStyle';

class App extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
  };

  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  changeValue = text => {
    this.setState({search: text});
  };

  render() {
    return (
      <SafeAreaView style={styles.safeAreaViewStyle}>
        <ImageBackground
          source={require('../img/bg.jpeg')}
          style={styles.image}>
          <ScrollView>
            <View style={styles.appContainer}>
              <Text style={styles.titleText}> Looking for a picture? </Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputText}
                placeholder="Do your research here!"
                onChangeText={this.changeValue}
                defaultValue={''}
                editable
              />
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate('Result', {
                  research: this.state.search,
                });
              }}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                Let's find out
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

export default App;
