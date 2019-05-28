import React from 'react';
import { StyleSheet, View, StatusBar, TextInput, Text, Dimensions, TouchableOpacity } from 'react-native';

export default class LoginScreen extends React.Component {

   static navigationOptions = { 
        title: "Sign in",  
      };  

  render() {  

    return (
      <View style={styles.container}>
        <View>
          <StatusBar barStyle = "light-content" hidden = {false} translucent = {true}/>
        </View>
        <View style={styles.inputTextBox}>
            <View style={styles.inputTextContainer}>
                <Text style={styles.label}>Email</Text>
                <TextInput style={styles.inputText} placeholder="Email"></TextInput>
            </View>
            <View style={styles.inputTextContainer}>
                <Text style={styles.label}>Password</Text>
                <TextInput style={styles.inputText}  secureTextEntry={true} placeholder="Password" ></TextInput>
            </View>
        </View>
        <View>
            <TouchableOpacity style={styles.loginButton} onPress={() => this.props.navigation.navigate('table')}><Text style={styles.buttonText} >Login</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
    },
    inputTextContainer:{
      marginTop: 20
    },
    inputText:{
      width: Dimensions.get('window').width-70,
      borderWidth: 1,
      borderColor: '#dedede',
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5,
      marginTop: 5,
      fontFamily: 'Quicksand-Light'
    },
    label:{
      fontFamily: 'Quicksand-Bold',
      marginLeft: 4
    },
    inputTextBox:{
      marginTop: 30
    },
    loginButton:{
        borderRadius: 10,
        backgroundColor: '#870000',
        borderWidth: 0,
        height: 40,
        width: 200,
        alignItems:'center',
        justifyContent: 'center',
        marginTop: 40
      },
      buttonText:{
        fontSize:15,
        color: 'white',
        fontFamily: 'Raleway-Bold'  
      }
});
