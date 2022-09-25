import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function TodoItem({item, deleteItem}) {
  return (
    <TouchableOpacity onPress={()=> {deleteItem(item.key)}}>
        <Text style={styles.textStyle}>{item.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    textStyle: {
        padding: 15,
        marginTop: 15,
        borderColor: "black",
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    }
})
