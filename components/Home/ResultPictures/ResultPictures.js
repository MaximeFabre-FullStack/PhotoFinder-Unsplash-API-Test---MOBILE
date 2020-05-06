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
      numberOfPageResearch: '',
    };
  }

  componentDidUpdate(prevProps, prevState) {
    var research = this.props.navigation.getParam('research');
    if (
      prevProps.navigation.getParam('research') == research ||
      prevProps.navigation.getParam('research') == ''
    ) {
      return;
    }
    JSON.stringify(research);
    fetch(
      'https://api.unsplash.com/search/collections?page=1&query=' +
        research +
        '&per_page=1&client_id=fG-rIGoQvQIZ2k77cHFfyh9IrQRGyr1K2b_4tgZ10ZY',
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({result: data.results});
        console.log(this.state.result);
        error => {
          console.log(error);
        };
      });
  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <Text>{this.state.numberOfPageResearch}coucou</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default ResultPicture;
