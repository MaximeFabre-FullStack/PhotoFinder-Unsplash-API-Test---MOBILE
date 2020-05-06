import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import randomPictureStyle from './RandomPictureStyle';

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

  componentDidMount() {
    fetch(
      'https://api.unsplash.com//photos?query=random&client_id=fG-rIGoQvQIZ2k77cHFfyh9IrQRGyr1K2b_4tgZ10ZY',
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({randomizer: data[0]});
        error => {
          console.log(error);
        };
      });
  }

  getNewRandom = () => {
    fetch(
      'https://api.unsplash.com//photos?query=random&client_id=fG-rIGoQvQIZ2k77cHFfyh9IrQRGyr1K2b_4tgZ10ZY',
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({randomizer: data[0]});
        error => {
          console.log(error);
        };
      });
  };

  render() {
    return (
      <View style={randomPictureStyle.randomImgContainer}>
        <TouchableOpacity onPress={this.getNewRandom}>
          <Image source={{uri: this.state.randomizer}} />
        </TouchableOpacity>
      </View>
    );
  }
}
export default Random;
