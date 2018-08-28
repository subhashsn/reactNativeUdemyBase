import React,{Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import reducers from './reducer/index'
import Header from './components/common/Header'
import LibraryList from './components/LibraryList'

export default class app extends Component{
    

    render(){
        return(
            <Provider store={createStore(reducers)}>
                <View>
                    <Header headerText="Tech Stack"/>
                    <LibraryList />
                </View>
            </Provider>
        )
    }
}