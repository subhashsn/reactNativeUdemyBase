import React from 'react'
import {Text, TouchableOpacity} from 'react-native'

const Button = ({onPress,displayText}) =>{
    const {buttonStyle,textStyle} = styles
    return(
        <TouchableOpacity  onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>
                {displayText}
            </Text>
        </TouchableOpacity>
    )
}

const styles = {
    textStyle:{
        alignSelf:'center',
        paddingTop:10,
        paddingBottom:10,
        fontSize:16,
        fontWeight:'600',
        color:'#007aff'
    },
    buttonStyle:{
        flex:1,
        alignSelf:'stretch',
        backgroundColor:'#fff',
        borderColor:'#007aff',
        borderRadius:5,
        borderWidth:1,
        marginLeft:5,
        marginRight:5
    }
}
// export default Button;
export {Button};//If we are using export and import statements in index.js then we should not use default