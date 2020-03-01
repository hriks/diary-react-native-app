import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux'

import Routes from './components/Routes'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
})


class Main extends React.Component<{}> {

    render() {
        const {authData: { isLoggedIn }} = this.props;

        return (
            <View style={styles.container}>
                <Routes isLoggedIn={isLoggedIn} />
            </View>
        );
    }
}

mapStateToProps = state => ({
    authData: state.authReducer.authData
})

export default connect(mapStateToProps, null)(Main)