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
var WelcomeView = require('./welcome.view.js');

var AddOptionView = React.createClass({

  _goBack: function() {
    this.props.navigator.pop();
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text>
          Ajouter une option
        </Text>
        <Button style={{color: 'green'}} onPress={this._goBack}>
          Go back
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

module.exports = AddOptionView;
