import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

class Random extends Component {
  static navigationOptions = {
    drawerLabel: 'Random Picture',
  };
  constructor(props) {
    super(props);
    this.state = {
      randomizer: '',
    };
  }

  randomSelection = max => {
    // random number from 0 to 30 to select the index of the randomizer to display
    return Math.floor(Math.random() * Math.floor(max));
  };

  componentDidMount() {
    // when page mount, select a random pic
    this.getNewRandom();
  }

  getNewRandom = () => {
    // on press of T.O , select a new random pic
    fetch(
      'https://api.unsplash.com//photos?query=random&per_page=30&client_id=fG-rIGoQvQIZ2k77cHFfyh9IrQRGyr1K2b_4tgZ10ZY',
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({randomizer: data[this.randomSelection(30)]});
        console.log(this.state.randomizer.user.first_name);
        error => {
          console.log(error);
        };
      });
  };

  render() {
    return (
      <ScrollView style={[]}>
        <TouchableOpacity
          onPress={this.getNewRandom}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {this.state.randomizer ? (
            <Image
              style={{
                width: 350,
                height: 350,
                marginTop: 100,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              source={{
                uri: this.state.randomizer.urls.small,
              }}
            />
          ) : (
            <Image
              style={{
                width: 400,
                height: 400,
                marginTop: 100,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              source={{
                uri:
                  'https://i2.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1',
              }}
            />
          )}
          <Text
            style={{
              color: 'purple',
              fontSize: 18,
              marginLeft: 'auto',
              marginTop: 20,
              marginRight: 50,
              fontWeight: 'bold',
            }}>
            {this.state.randomizer ? this.state.randomizer.user.first_name : ''}
          </Text>
          <Text
            style={{
              color: 'purple',
              fontSize: 18,
              marginLeft: 'auto',
              marginRight: 'auto',
              fontWeight: '900',
              fontStyle: 'italic',
            }}>
            {this.state.randomizer ? this.state.randomizer.alt_description : ''}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
export default Random;
