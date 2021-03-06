import React from 'react'
import {View, Text, TextInput} from 'react-native'

const Input = ({label, value, OnChangeText, placeHolder,secureTextEntry}) =>{
    const {containerStyle, labelStyle,inputStyle} = styles
    return(
            <View style={containerStyle}>
                <Text style={labelStyle}>
                    {label}
                </Text>
                <TextInput 
                    secureTextEntry={secureTextEntry}
                    autoCorrect={false}
                    placeholder={placeHolder}
                    value = {value}
                    onChangeText = {OnChangeText}
                    style={inputStyle} 
                />
            </View>
    );
};

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize:18,
        lineHeight:23,
        flex:2,
        width:250,
        height:30
        
    },
    labelStyle:{
        fontSize:18,
        paddingLeft:20,
        flex:1
    },
    containerStyle:{
        height:40,
        flex:1,
        flexDirection:'row',
        align:'center'
    }
}

export {Input}