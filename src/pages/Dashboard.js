import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import {connect} from 'react-redux'
import { compose } from 'redux'

import {Actions} from 'react-native-router-flux';
import { Field, reduxForm } from 'redux-form'

import { TextButton, RaisedTextButton } from 'react-native-material-buttons';

import { createNewUser } from '../actions/auth.actions'
import Loader from "../components/Loader";
import {ErrorUtils} from "../utils/auth.utils";


import Logo from '../components/Logo'
import InputText from '../components/InputText'
import Colors from '../components/Colors'


const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.backgroundColor,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signupTextContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 16,
        flexDirection: 'row'
    },
    signupText: {
        color: Colors.baseFontColor,
        fontSize: 14
    },
    signupButton: {
        fontSize: 14,
        color: '#093145',
        fontWeight: "600"
    },
    button: {
        backgroundColor: Colors.defaultButtonColor,
        fontSize: 16,
        width: 300,
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12,
        height: 45
    },
    buttonTitle: {
        fontWeight: '600'
    },
    errorText: {
        color: Colors.defaultButtonColor,
        fontSize: 12,
        paddingHorizontal: 16,
        paddingBottom: 8,
        paddingTop: 2
    }
})


class Dashboard extends React.Component<{}> {

    goBack() {
        Actions.pop();
    }

    goKeep() {
    }

    render() {
        const {getUser: {userDetails}} = this.props;
        return (
            <View style={styles.container}>
                 <Text style={styles.textStyle}>
                    This is a profile page for {userDetails ? userDetails.name : ""}
                </Text>
            </View>
        )
    }
}

const validate = (values) => {
    const errors = {};
    if(!values.username) {
        errors.username = "Username is required"
    }
    if(!values.email) {
        errors.email = "Email is required"
    }
    if(!values.password) {
        errors.password = "password is required"
    }
    return errors;
};

mapStateToProps = (state) => ({
    getUser: state.userReducer.getUser
})

mapDispatchToProps = (dispatch) => ({
    dispatch
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    reduxForm({
        form: "register",
        validate
    })
)(Dashboard);