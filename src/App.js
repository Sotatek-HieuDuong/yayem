import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {store, persistor} from '@app/redux/store';
import StackNavigator from './StackNavigator';
import {CommonColors} from '@app/utils/CommonStyles';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={CommonColors.transparent}
        />
        <StackNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
