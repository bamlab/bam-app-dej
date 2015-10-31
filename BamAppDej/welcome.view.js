'use strict';

var React = require('react-native');
var Button = require('react-native-button');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} = React;
var AddOptionView = require('./addOption.view.js');

var WelcomeView = React.createClass({

  _goCreateOption: function() {
    console.log("HELLO WORLD");
    this.props.navigator.push({
      name: 'AddOptionView',
      component: AddOptionView
    });
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Button style={{color: 'green'}} onPress={this._goCreateOption}>
          Press Me!
        </Button>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = WelcomeView;
