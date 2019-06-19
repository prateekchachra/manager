import React, { Component } from 'react';
import {Card, Input, CardSection, Button, Spinner} from './common';
import { connect } from 'react-redux';
import {View, Text} from 'react-native';
import { emailChanged, passwordChanged, loginUser } from '../actions';
class LoginForm extends Component {

    onEmailChange(text){
        this.props.emailChanged(text);
    }

    onPasswordChange(text){

        this.props.passwordChanged(text);
    }


    onButtonPress(){
        const { email, password } = this.props;
        this.props.loginUser(email, password);


    }

    renderError(){
        if(this.props.error){

            return(
                <View style={{backgroundColor: 'white'}}>

                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>
                </View>
            );

        }
    }
    renderButton(){

        if(this.props.loading){

            return <Spinner size="large"/>;
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
        );

    }
    render(){

        return(
            <Card>
                <CardSection>
                    <Input label="Email"
                    placeholder="user@gmail.com"
                    onChangeText={this.onEmailChange.bind(this)}
                    value={this.props.email}>
                    </Input>
                </CardSection>
                <CardSection>
                    <Input secureTextEntry 
                    label="Password"
                    placeholder="password"
                    onChangeText={this.onPasswordChange.bind(this)}
                    value={this.props.password}></Input>
                </CardSection>
                {this.renderError()}
                <CardSection>
                    
                    {this.renderButton()}
                    </CardSection>
                
            </Card>
        );
    }
}

const mapStateToProps = ({auth}) => {
    return {
        email: auth.email,
        password: auth.password,
        error: auth.error,
        loading: auth.loading
    };
};


const styles = {

    errorTextStyle: {

            fontSize: 20,
            alignSelf: 'center',
            color: 'red'
    }

}
export default connect(mapStateToProps, { emailChanged, 
    passwordChanged, loginUser } )(LoginForm);


