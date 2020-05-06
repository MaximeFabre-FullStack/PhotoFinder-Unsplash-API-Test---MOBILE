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

class ResultPicture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      page: 1,
      apiKey: 'fG-rIGoQvQIZ2k77cHFfyh9IrQRGyr1K2b_4tgZ10ZY',
      secretKey: 'LUs-Bro6ZxeTL3VcVCD2NKEK6if5vLQhNi3scdA0sJE',
    };
  }

  componentDidUpdate(prevProps, prevState) {
    var research = this.props.navigation.getParam('research');
    if (prevProps.navigation.getParam('research') == research) {
      return;
    }
    JSON.stringify(research);
    const key = this.state.apiKey;
    const pageNumber = this.state.page;
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
        var recupResult = data[0];
        console.log(recupResult);
        this.setState({result: recupResult});
        error => {
          console.log(error);
        };
      });
  }
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <Text>coucou</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default ResultPicture;
