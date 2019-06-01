import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Image,StatusBar } from 'react-native';


export default class FirstScreen extends React.Component {

  render() {  
 
    return (    
        
        <View style={styles.container}>
          <View>
          <StatusBar barStyle = "dark-content" hidden = {false} translucent = {true}/>
        </View>
            <View style={styles.logoContainer}>
                <View style={styles.logo}><Image style={{width:250, height: 250, resizeMode : 'contain'}} source={require('../../assets/images/pos-logo.png')}></Image></View>
                <View style={styles.centerContent}><Text style={styles.companyText}>ARTIFICER</Text></View>
                <View style={styles.centerContent}><Text style={styles.logoText}>POINT OF SALE</Text></View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.loginButton} onPress={() => this.props.navigation.navigate('login')} >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.registerButton}  onPress={() => this.props.navigation.navigate('register')}>
                    <Text style={styles.buttonText} >Register</Text>
                </TouchableOpacity>
                <View style={{marginTop: 15, justifyContent:'center', alignItems: 'center'}}>
                  <Text onPress={() => this.props.navigation.navigate('forgotpassword')} style={{fontFamily:'Quicksand-Light'}}>Forgot Password?</Text>
                </View>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        alignItems:'center',
        justifyContent: 'center'
    },
    logo:{
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10
    },
    logoContainer:{
        marginBottom: 100
    },
    centerContent:{
      alignItems: 'center',
      justifyContent: 'center'
    },
    companyText:{
      fontSize: 50,
      color: '#3B3B3B',
      letterSpacing: 5,
      fontFamily: 'Raleway-Bold'
    },
    logoText:{
        fontSize: 20,
        color: '#3B3B3B',
        letterSpacing: 5,
        fontFamily: 'Raleway-Light'
    },
    buttonContainer:{
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 5,
        paddingBottom: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    registerButton:{
      borderRadius: 10,
      backgroundColor: '#870000',
      borderWidth: 0,
      height: 40,
      width: 250,
      alignItems:'center',
      justifyContent: 'center',
      marginTop: 15
      
    },
    loginButton:{
      borderRadius: 10,
      backgroundColor: '#870000',
      borderWidth: 0,
      height: 40,
      width: 250,
      alignItems:'center',
      justifyContent: 'center'
    },
    buttonText:{
      fontSize:15,
      color: 'white',
      fontFamily: 'Raleway-Bold'  
    }
});


   
