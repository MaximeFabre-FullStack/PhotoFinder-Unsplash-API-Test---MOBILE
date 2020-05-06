import React, {Component} from 'react';
import {View, Animated, Image, Easing} from 'react-native';
import loadingStyle from './LoadingStyle';

export default class App extends React.Component {
  constructor() {
    super();
    this.RotateValueHolder = new Animated.Value(0);
  }

  componentDidMount() {
    setTimeout(() => {
      this.yourFunction();
    }, 1500);
    this.StartImageRotateFunction();
  }

  yourFunction = () => {
    return this.props.navigation.navigate('app');
  };

  StartImageRotateFunction() {
    this.RotateValueHolder.setValue(0);
    Animated.timing(this.RotateValueHolder, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start(() => this.StartImageRotateFunction());
  }
  render() {
    const RotateData = this.RotateValueHolder.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
    return (
      <View style={loadingStyle.loadImgView}>
        <Animated.Image
          style={{
            width: 200,
            height: 200,
            transform: [{rotate: RotateData}],
            borderRadius: 100,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 'auto',
            marginBottom: 'auto',
          }}
          source={require('../img/camera.jpeg')}
        />
      </View>
    );
  }
}
