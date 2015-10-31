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
        <View style={styles.header}>
          <Text style={styles.headerTitle}>
            Lunch App
          </Text>
        </View>
        <View style={styles.list}>
          <Text style={styles.listTitle}>
            Il y a {this.props.lunchOptions.getAllOptions().length} différentes options :
          </Text>
          {
            allOptions.map(function(option, index) {
              return (
                <View style={styles.listItemContainer}>
                  <Text style={styles.listItem}>
                    {option.get('name')}
                  </Text>
                </View>
              );
            })
          }
        </View>
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
    fontSize: 20,
  },
  list: {
    flex: 2,
  },
  listTitle: {
    fontSize: 20,
    margin: 20,
  },
  listItemContainer: {
    padding: 20,
    marginLeft: 20,
    marginRight: 20,
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
  },
  listItem: {
    padding: 10,
    fontSize: 16,
    color: '#888888',
  },
});

module.exports = WelcomeView;
