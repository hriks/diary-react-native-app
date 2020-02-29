import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar
} from 'react-native';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Main from './src/Main'
import persist from './src/config/store';


const persistStore = persist();


export default class App extends React.Component<{}> {

    render() {
        return (
            <Provider store={persistStore.store}>
                <PersistGate loading={null} persistor={persistStore.persistor}>
                    <Main />
                </PersistGate>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
});

