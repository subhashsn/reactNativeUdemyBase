import React,{Component} from 'react';
import {View, Text} from 'react-native';
// import {firebase} from 'firebase';
import { Header } from './components/common/Header';
import {LoginForm} from './components/LoginForm';

export default class app extends Component{
    

    render(){
        return(
            <View>
                <Header headerText="Authentication"/>
                <LoginForm/>
            </View>
        )
    }
}