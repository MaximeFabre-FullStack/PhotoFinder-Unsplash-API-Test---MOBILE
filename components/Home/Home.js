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
      result: [],
      page: 1,
      apiKey: 'fG-rIGoQvQIZ2k77cHFfyh9IrQRGyr1K2b_4tgZ10ZY',
      secretKey: 'LUs-Bro6ZxeTL3VcVCD2NKEK6if5vLQhNi3scdA0sJE',
    };
  }

  changeValue = text => {
    this.setState({search: text});
  };

  getPictures = () => {
    let research = this.state.search;
    const key = this.state.apiKey;
    let pageNumber = this.state.page;
    pageNumber.toString();
    fetch(
      'https://api.unsplash.com/photos?query=' +
        research +
        '&' +
        pageNumber +
        '&client_id=' +
        key,
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({research: push(data)});
        error => {
          console.log(error);
        };
      });
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
            {/* <TouchableOpacity
              style={styles.button1}
              onPress={() =>
                this.props.navigation.dispatch(DrawerActions.openDrawer())
              }>
              <Text style={styles.marginTopButton}>______</Text>
              <Text style={styles.marginTopButton}>______</Text>
              <Text style={styles.marginTopButton}>______</Text>
            </TouchableOpacity> */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputText}
                placeholder="Do your research here!"
                onChangeText={this.changeValue}
                defaultValue={''}
                editable
              />
            </View>
            <TouchableOpacity style={styles.button} onPress={this.getPictures}>
              <Text>Let's find out</Text>
            </TouchableOpacity>
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

export default App;
