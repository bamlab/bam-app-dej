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
    var allOptions = this.props.lunchOptions.getAllOptions();

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          BAM Dej App
        </Text>
        <Text style={styles.instructions}>
          Il y a {this.props.lunchOptions.getAllOptions().length} différentes options pour manger ce midi.
        </Text>
        {
          allOptions.map(function(option, index) {
            return <Text>Option {index}: {option.get('name')}</Text>
          })
        }
        <Button style={{color: 'green'}} onPress={this._goCreateOption}>
          Ajouter une nouvelle option
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
