/**
 * App Dej
 * https://github.com/bamlab/bam-app-dej
 */
'use strict';

var React = require('react-native');
var WelcomeView = require('./welcome.view.js');
var Button = require('react-native-button');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} = React;

class App extends React.Component {
    render() {
        return (
            <Navigator
                initialRoute={{name: 'WelcomeView', component: WelcomeView}}
                configureScene={() => {
                    return Navigator.SceneConfigs.FloatFromRight;
                }}
                renderScene={(route, navigator) => {
                    // count the number of func calls
                    console.log(route, navigator);

                    if (route.component) {
                        return React.createElement(route.component, { navigator });
                    }
                }}
             />
        );
    }
}

module.exports = App;
