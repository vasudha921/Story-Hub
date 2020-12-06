import React from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import {Header} from 'react-native-elements';

export default class WriteStoryScr extends React.Component{
    constructor(){
        super();
        this.state={
            text:'',
            multiText:''
        }
    }
    
    render(){
        return(
            <View>
              <Header
                    backgroundColor={'teal'}
                    centerComponent={{
                    text: 'My Story Hub',
                    style: { color: '#fff', fontSize: 20 },
                    }}
                />
                <Text>Title of the Book:- </Text>
               <TextInput
               style={styles.inputBox}
               onChangeText={text => {
                 this.setState({ text: text });
               }}
               value={this.state.text}
               
             />
             <Text>Author of the Book</Text>
             <TextInput 
                onChangeText={text => {
                 this.setState({ text:text });
               }}
               value={this.state.text}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
 inputBox: {
             marginTop: 50,
             width: '80%',
             alignSelf: 'center',
             height: 40,
             textAlign: 'center',
             borderWidth: 4,
             
           },
    
})