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
      exist: false,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.props.navigation.getParam('research'));
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
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <ScrollView>
          <Image
            source={{
              uri: this.state.exist
                ? this.state.exist
                : 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
            }}
            style={{
              width: 350,
              height: 350,
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: 20,
            }}
          />
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              marginLeft: 'auto',
              marginTop: 20,
              marginRight: 54,
              fontWeight: 'bold',
            }}>
            Maxime F.
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              marginLeft: 'auto',
              marginRight: 'auto',
              fontStyle: 'italic',
            }}>
            Voici la definition temporaire de l'image
          </Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default ResultPicture;
