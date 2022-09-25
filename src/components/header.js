import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
        <Text style={styles.title}>My Todos</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
      backgroundColor: "skyblue",
      paddingTop: 20,
      height: 60
    },
    title:{
        color: "black",
        textAlign: "center",
        fontWeight: "bold"
    }
});
