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
  TouchableHighlight,
} = React;
var AddOptionView = require('./addOption.view.js');

var WelcomeView = React.createClass({

  getInitialState: function() {
    return {
      votes: {}
    }
  },

  _goCreateOption: function() {
    this.props.navigator.push({
      name: 'AddOptionView',
      component: AddOptionView
    });
  },

  _votePlusFor: function(option) {
    this.props.parseService.votePlusFor(option).then(() =>{
      alert("Vote enregistré!");
      var votes = this.state.votes;
      votes[option.id]++;

      this.setState({
        votes: votes
      });
    }, () => {
      alert("Erreur lors du vote :(");
    });
  },

  componentWillReceiveProps: function(nextProps) {
    if (nextProps === this.props) return;

    var allOptions = this.props.lunchOptions.getAllOptions();

    allOptions.forEach((option) => {
      this.props.parseService.getPlusVotesFor(option).then((optionVotes) => {
        var votes = this.state.votes;
        votes[option.id] = optionVotes.length;

        this.setState({
          votes: votes
        });
      }, () => {
        console.log("Unable to load votes for option with id=", option.id);
      });
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
            allOptions.map((option, index) => {
              return (
                <View style={styles.listItemContainer}>
                  <Text style={styles.listItem}>
                    {index}. {option.name}
                  </Text>
                  <View style={styles.listItemActions}>
                    <Text style={{fontSize: 16, color: '#888888', width: 30}}>
                      {this.state.votes[option.id]}
                    </Text>
                    <TouchableHighlight onPress={this._votePlusFor.bind(this, option)}>
                      <View style={styles.roundButton}>
                        <Text style={styles.roundButtonText}>
                          +
                        </Text>
                      </View>
                    </TouchableHighlight>
                  </View>
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 80,
    padding: 10,
    margin: 5,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'white',
    borderRadius: 3,
    shadowColor: '#444444',
    shadowOpacity: 0.1,
    shadowOffset: {width: 2, height: 2},
    alignItems: 'center',
  },
  listItem: {
    flex: 0.65,
    padding: 10,
    fontSize: 16,
    color: '#888888',
  },
  listItemActions: {
    flex: 0.35,
    flexDirection: 'row',
    alignItems: 'center',
  },
  roundButton: {
    width: 50,
    height: 50,
    borderRadius: 45,
    borderWidth: 1,
    backgroundColor: '#2a7fff',
    borderColor: '#2a7fff',
    shadowColor: '#444444',
    shadowOpacity: 0.1,
    shadowOffset: {width: 2, height: 2},
    textAlign: 'center',
    padding: 10,
    marginLeft: 20,
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
  },
  roundButtonText: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
    lineHeight: 28,
  },
});

module.exports = WelcomeView;
