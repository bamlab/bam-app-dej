'use strict';

var React = require('react-native');
var Button = require('react-native-button');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  ScrollView,
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
        <Text style={styles.listTitle}>
          Il y a {this.props.lunchOptions.getAllOptions().length} différentes options :
        </Text>
        <ScrollView style={styles.list}>
          {
            allOptions.map(function(option, index) {
              return (
                <View style={styles.listItemContainer}>
                  <Text style={styles.listItem}>
                    {index}. {option.name}
                  </Text>
                </View>
              );
            })
          }
        </ScrollView>
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
    backgroundColor: '#eeeeee',
    paddingTop: 5,
  },
  listTitle: {
    fontSize: 20,
    margin: 20,
  },
  listItemContainer: {
    padding: 10,
    margin: 5,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'white',
    borderRadius: 3,
    shadowColor: '#444444',
    shadowOpacity: 0.1,
    shadowOffset: {width: 2, height: 2},
  },
  listItem: {
    padding: 10,
    fontSize: 16,
    color: '#888888',
  },
});

module.exports = WelcomeView;
