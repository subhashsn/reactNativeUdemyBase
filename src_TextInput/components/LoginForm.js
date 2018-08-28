import React,{Component} from 'react'
import { Button } from './common/Button'
import { Card } from './common/Card'
import { CardSection } from './common/CardSection'
import {Input} from './common/Input'
import firebase from 'firebase'

class LoginForm extends Component
{
    state = {email:'',password:''}

    onButtonPress(){
        const {email, password} = this.state;

        firebase.auth().signInWithEmailAndPassword(email, password)
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input 
                        secureTextEntry="false"
                        label="Email"
                        placeHolder="Enter your email id"
                        value={this.state.email}
                        onChangeText={email=>this.setState({email})}
                        />
                </CardSection>
                <CardSection>
                    <Input 
                        secureTextEntry="true"
                        label="Password"
                        placeHolder="Enter your password"
                        value={this.state.password}
                        onChangeText={password=>this.setState({password})}
                        />
                </CardSection>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)} displayText='Log In' />
                </CardSection>
            </Card>
            
        );
    }
}

export {LoginForm}