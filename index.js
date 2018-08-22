/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import BaseFile from './BaseFile';
import ButtonExample from './src/Component/ButtonComponent/Button';
import FormExample from './src/Component/FormComponent/Form';
// import NewComponent from './src/Component/CreateNewComponent/newComponent';
import Header from './src/Component/HeaderComponent/header';
import AlbumList from './src/Component/AlbumList/AlbumList';
import {name as appName} from './app.json';
import React from 'react'
import {View} from 'react-native'

const App1 = () =>(
    // <Text>This is my first component</Text>
    <View style={{flex:1}}>
        <Header headerText='Albums'/>
        <AlbumList />
    </View>
);

AppRegistry.registerComponent(appName, () => App1);
