/**
 * App Dej
 * https://github.com/bamlab/bam-app-dej
 */
'use strict';

var React = require('react-native');
var ParseService = require('./parseService');
var LunchOptions = require('./lunchOptions');
var WelcomeView = require('./welcome.view.js');
var {
    Navigator
} = React;


class App extends React.Component {
    constructor() {
        super();
        var parseService = new ParseService();
        var lunchOptions = new LunchOptions();

        this.state = {
            lunchOptions: lunchOptions,
            parseService: parseService
        };

        //Load all the options available from Parse...
        parseService.loadAllLunchOptions().then((allOptions) => {
            allOptions.forEach(function(option) {
                lunchOptions.addOption({
                    name: option.get('name'),
                    id: option.id
                });
            });

            //...and update the app state.
            this.setState({lunchOptions: lunchOptions});
        });
    }

    render() {
        return (
            <Navigator
                initialRoute={{name: 'WelcomeView', component: WelcomeView}}
                configureScene={() => {
                    return Navigator.SceneConfigs.FloatFromRight;
                }}
                renderScene={(route, navigator) => {
                    if (!route.component) return;

                    return React.createElement(route.component, {
                        navigator,
                        lunchOptions: this.state.lunchOptions,
                        parseService: this.state.parseService
                    });
                }}
             />
        );
    }
}

module.exports = App;
