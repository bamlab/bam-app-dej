/**
 * App Dej
 * https://github.com/bamlab/bam-app-dej
 */
'use strict';

var React = require('react-native');
var WelcomeView = require('./welcome.view.js');
var Parse = require('parse/react-native');
var {
  Navigator
} = React;

//Test
Parse.initialize("FDag4VvDooHzkS6joKK845O8gDWNpwnicK57CxLv", "P4ByaCIjUmszYBK5CNVbTypOK2m1X2zQMQKjpPVB");
var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}).then(function(object) {
  alert("yay! it worked");
});

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
