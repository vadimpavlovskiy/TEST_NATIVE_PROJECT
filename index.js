/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import { name as appName } from './app.json';
import React from 'react';
import configureStore from './src/redux/store/store';
import { NavigationContainer } from '@react-navigation/native';

const store = configureStore()

const RNRedux = () => (
    <NavigationContainer>
        <Provider store={store}>
            <App />
        </Provider>
    </NavigationContainer>
)

AppRegistry.registerComponent(appName, () => RNRedux);
