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
    return {lunchOptionName: '...'};
  },

  propTypes: {
    parseService: React.PropTypes.object
  },

  _goBack: function() {
    this.props.navigator.pop();
  },

  _addOption: function() {
    var newOption = {
      name: this.state.lunchOptionName
    };

    this.props.parseService.addLunchOption(newOption).then(() => {
      this.props.lunchOptions.addOption(newOption);
      this._goBack();
    }, () => {
      alert("Error while saving your lunch :(");
    });
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Button style={{color: 'green'}} onPress={this._goBack}>
          Go back
        </Button>
        <Text>
          Ajouter une option
        </Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({lunchOptionName: text})}
          value={this.state.lunchOptionName}
        />
        <Button style={{color: 'green'}} onPress={this._addOption}>
          Ajouter
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
