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
    this.props.navigator.push({
      name: 'AddOptionView',
      component: AddOptionView
    });
  },

  render: function() {
    console.log();

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Lunch App
        </Text>
        <Text style={styles.instructions}>
          Il y a {this.props.lunchOptions.getAllOptions().length} différentes options pour manger ce midi.
        </Text>
        <Button style={styles.button} onPress={this._goCreateOption}>
          Ajouter une option
        </Button>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#2a7fff',
    color: 'white',
    padding: 15,
    paddingTop: 25,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#ffcc00',
    textAlign: 'center',
    color: 'white',
    padding: 10,
    margin: 20,
  },
});

module.exports = WelcomeView;
