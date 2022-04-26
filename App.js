import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native';

export default function App() {
  const[name, setName]= useState('')
  const[submitted, setSubmitted]= useState(false)
  const[answer, setAnswer]= useState(false)
  const[age, setAge]= useState('')
  const onPressHandler=()=>{
    setSubmitted(!submitted)
  }
  const onClickHandler=()=>{
      setAnswer(!answer)
  }
  return (
    <View style={styles.container}>
      <Text>What is your name?</Text>
      <TextInput
       style={styles.textInput}
       placeholder='e.g John'
       onChangeText={(value)=>setName(value)}
      />
      {/* <Button
      title={submitted ? 'clear' : 'submit '}
      onPress={onPressHandler}
      disabled={submitted}
      /> */}

/** To test TouchableOpacity */
      <TouchableOpacity
      onPress={onPressHandler}
      style={styles.button}
      activeOpacity={0.1}
      >
         <Text>{submitted ? 'clear' : 'submit '}</Text>
      </TouchableOpacity>
     {
       submitted ?
       <Text>you registered as: {name}</Text>
       :null
     }


     /** To test button */

     <Text style={styles.secondText}>How old are you?</Text>
     <TextInput style={styles.secondTextInput}
      placeholder='e.g 12years'
      placeholderTextColor={'#ffff'}
      keyboardType={'number-pad'}
      onChangeText={(value)=>setAge(value)}
      
     />
      <Button
      title={answer ? 'Show' : 'Clear'}
      color={'#fff000'}
      onPress={onClickHandler}
      disabled={!answer}
      />
      <Text>Wow! You are {age} years old!!! </Text>
     
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    margin: 100
  },

  textInput:{
    borderWidth: 1,
    width: 200,
    textAlign: 'center',
    margin: 20
  },
  button:{
    backgroundColor: '#ff0',
    width: 100,
    borderRadius: 10,
    alignItems: 'center'
  },
  secondText:{
    marginTop: 40,
    alignItems:'center'
  },
  secondTextInput:{
    borderWidth:1,
    width:200,
    backgroundColor:'#000fff',
    textAlign:'center',
    margin: 10,
    color:'#fff'
    
  }
});
