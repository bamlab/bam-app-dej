'use strict';

var React = require('react-native');
var Button = require('react-native-button');
var {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Navigator,
} = React;
var WelcomeView = require('./welcome.view.js');

var AddOptionView = React.createClass({

  getInitialState: function() {
    return {lunchOptionName: 'Nom de l\'option'};
  },

  _goBack: function() {
    this.props.navigator.pop();
  },

  addOption: function() {
    alert(this.state.lunchOptionName);
  },

  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Button style={{color: 'white', flex: 0.3}} onPress={this._goBack}>
            Annuler
          </Button>
          <Text style={styles.headerTitle}>
            Ajouter une option
          </Text>
        </View>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({lunchOptionName: text})}
            value={this.state.lunchOptionName}
          />
          <Button style={styles.button} onPress={this.addOption}>
            Ajouter
          </Button>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    padding: 15,
    paddingTop: 25,
    backgroundColor: '#2a7fff',
  },
  headerTitle: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    flex: 0.5,
  },
  form: {
    marginTop: 30,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 20,
    padding: 10,
  },
  button: {
    backgroundColor: '#ffcc00',
    textAlign: 'center',
    color: 'white',
    padding: 10,
    margin: 20,
  },
});

module.exports = AddOptionView;
