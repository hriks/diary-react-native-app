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

import { loginUser } from '../actions/auth.actions'
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


class Login extends React.Component<{}> {

    signup() {
        Actions.signup()
    }

    loginUser = async (values) => {
        try {
            const response =  await this.props.dispatch(loginUser(values));
            console.log(response);
            if (!response.success) {
                throw response;
            }
        } catch (error) {
            let errorText;
            if (error.message) {
                errorText = error.message
            }
            errorText = error.responseBody;
            Alert.alert(
                'Login Error!',
                errorText,
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                ]
            );
        }
    }

    renderTextInput = (field) => {
        const {meta: {touched, error}, label, secureTextEntry, maxLength, keyboardType, placeholder, input: {onChange, ...restInput}} = field;
        return (
            <View>
              <InputText
                  onChangeText={onChange}
                  maxLength={maxLength}
                  placeholder={placeholder}
                  keyboardType={keyboardType}
                  secureTextEntry={secureTextEntry}
                  label={label}
                  {...restInput} />
            {(touched && error) && <Text style={styles.errorText}>{error}</Text>}
            </View>
        );
    }

    onSubmit = (values) => {
        this.loginUser(values)
    }

    render() {
        const { handleSubmit, loginUser} = this.props;
        return (
            <View style={styles.container}>
                {(loginUser && loginUser.isLoading) && <Loader />}
                <Logo />
                <Field
                    name="username"
                    placeholder="Username"
                    onSubmitEditing={()=>{this.email.focus()}}
                    component={this.renderTextInput} />
                <Field
                    name="password"
                    placeholder="Password"
                    secureTextEntry={true}
                    ref={(input) => {this.password = input}}
                    component={this.renderTextInput} />
                <RaisedTextButton
                    title="Login"
                    color={Colors.defaultButtonColor}
                    titleColor='#e7f3fa'
                    style={styles.button}
                    titleStyle={styles.buttonTitle}
                    onPress={handleSubmit(this.onSubmit)}
                    />
                <View style={styles.signupTextContainer}>
                    <Text style={styles.signupText}>Don't have an account? </Text>
                    <TouchableOpacity onPress={this.signup} >
                        <Text style={styles.signupButton}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const validate = (values) => {
    const errors = {};
    if(!values.username) {
        errors.username = "Username is required"
    }
    if(!values.password) {
        errors.password = "Password is required"
    }
    return errors;
};

mapStateToProps = (state) => ({
    loginUser: state.authReducer.loginUser
})

mapDispatchToProps = (dispatch) => ({
    dispatch
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    reduxForm({
        form: "login",
        validate
    })
)(Login);

