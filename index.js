/**
 * @format
 */

import {AppRegistry, Text, TextInput, LogBox} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
  'DEPRECATION WARNING',
  'Reanimated 2',
]);

AppRegistry.registerComponent(appName, () => App);
