import React from 'react';
import { StyleSheet, View, StatusBar, TextInput, Text, Dimensions, TouchableOpacity } from 'react-native';

export default class ForgotPasswordScreen extends React.Component {

   static navigationOptions = { 
        title: "Recover Password",  
      };  

  render() {  

    return (
      <View style={styles.container}>
        <View>
          <StatusBar barStyle = "light-content" hidden = {false} translucent = {true}/>
        </View>
        <View style={styles.inputTextBox}>
            <View style={styles.inputTextContainer}>
                <Text style={styles.label}>Enter Recovery Email Address</Text>
                <TextInput style={styles.inputText} placeholder="Recovery Email"></TextInput>  
            </View>
        </View>
        <View>
            <TouchableOpacity style={styles.loginButton} onPress={() => this.props.navigation.navigate('resetpassword')}><Text style={styles.buttonText}>Recover Password</Text></TouchableOpacity>
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
        fontFamily: 'Raleway'
    },
    label:{
        fontFamily: 'Raleway-Bold',
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
