import React,{useState} from 'react';
import { Text, View, StyleSheet, Button, TextInput, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from '../components/header';
import AddTodo from './addTodo';
import TodoItem from './todoItem';

export default function Home() {
    const [todos, setTodos] = useState([
        {text: "Buy a coffe", key: "1"},
        {text: "create an app", key: "2"},
        {text: "play with football", key: "3"},
    ]);

    const addTodo = (text)=>{

        if(text.length>3){
            setTodos((prevTodos)=>{
                return [
                    {text: text, key: Math.random().toString()},
                    ...prevTodos
                ]
            });
        }else{
            Alert.alert(
                "Oops", 
                "Hey, Length should be more than 3!", 
                [
                    {text: "Okay", onPress: ()=> {console.log("closed")}}
                ]
            );
        }
        
    }

    const deleteItem = (key)=>{
        setTodos((prevTodos)=> {
            return prevTodos.filter((todo)=> todo.key!=key);
        });
        console.log(key);
    }

    return (
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss();
        }}>
            <View style={styles.container}>
                <Header/>
                <View style={styles.content}>
                    <AddTodo addTodo={addTodo}/>
                    <View style={styles.list}>
                        <FlatList
                            keyExtractor = {(item)=>(item.key)}
                            data = {todos}
                            renderItem = {({item})=> (
                                <TodoItem item={item} deleteItem={deleteItem}/>
                            )}
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>  
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    content:{
        padding: 9,
        flex:1
    },
    list: {
      marginTop: 20,
      flex:1
    }
    
});