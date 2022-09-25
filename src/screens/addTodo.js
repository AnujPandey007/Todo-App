import React, {useState} from 'react';
import {TextInput, Text, StyleSheet, Button, View } from 'react-native';

export default function AddTodo({addTodo}) {

    const [text, setText] = useState("");

    const handleText= (value)=>{
        setText(value);
    }

  return (
    <View>
        <TextInput 
            style={styles.textInputStyle} 
            placeholder="Todo Name..."
            onChangeText={(value)=> {handleText(value)}}
        />
        <Button title='Add Todo' onPress={()=>{addTodo(text)}}/>
    </View>
    
  )
}


const styles = StyleSheet.create({
    textInputStyle: {
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        marginVertical: 10
    }
});
