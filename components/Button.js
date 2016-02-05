'use strict';

import React from 'react-native';
var {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} = React;

import colors from '../colors';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ffffff',
    borderRadius: 6,
    borderColor: colors.defaultButtonThemeColor,
    borderWidth: StyleSheet.hairlineWidth,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  text: {
    color: colors.defaultButtonThemeColor,
    textAlign: 'center',
  },
  pressedButton: {
    backgroundColor: colors.defaultButtonThemeColor,
  },
  pressedText: {
    color: '#ffffff',
  },
});

export default class Button extends Component {
  constructor(props){
    super(props);
    this.state = {
      pressed: false,
    };
  }
  _onPressIn(){
    this.setState({
      pressed: true,
    });
  }
  _onPressOut(){
    this.setState({
      pressed: false,
    });
  }
  render(){
    var pressed = this.state.pressed;
    var props = this.props;
    return (
      <TouchableWithoutFeedback onPress={props.onPress.bind(this)} onPressIn={this._onPressIn.bind(this)} onPressOut={this._onPressOut.bind(this)}>
        <View style={[props.buttonStyles, styles.button, pressed && styles.pressedButton, pressed && props.pressedButtonStyles]}>
          <Text style={[props.textStyles, styles.text, pressed && styles.pressedText, pressed && props.pressedTextStyles]}>{props.children}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
