import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Image,StatusBar } from 'react-native';
import { createStackNavigator, createAppContainer, Header } from 'react-navigation';
import TableScreen from './tableScreen';
import OrderScreen from './orderScreen';
import LoginScreen from './loginPage';
import RegisterScreen from './registerPage';
export class FirstScreen extends React.Component {

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

const FadeTransition  = (index, position) => {
    const sceneRange = [index-1, index];
    const outputOpacity = [0,1];
    const transition = position.interpolate({
      inputRange: sceneRange,
      outputRange: outputOpacity,
    });
    return{
      opacity: transition
    }
  }
  
  const navigationConfig = () => {
    return{
      screenInterpolator: (sceneProps) => {
        const position = sceneProps.position;
        const scene = sceneProps.scene;
        const index = scene.index;
  
        return FadeTransition(index,position);
      }
    }
  }   
  const AppStackNavigator = createStackNavigator({
      landing: {
        screen: FirstScreen,
        navigationOptions: {
          header: null,
      },
      },
      table: TableScreen,
      order: OrderScreen, 
      login: LoginScreen,
      register: RegisterScreen
      },      
      {  
      initialRouteName: 'landing',
      transitionConfig: navigationConfig,
      defaultNavigationOptions:{
        headerStyle: {
          backgroundColor: '#6F0000',
        },                    
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: 'Quicksand-Medium',
          fontWeight: undefined,
          fontSize: 17,
          marginLeft: -2
        },
      } 
        
  }
    );
     
  const AppContainer = createAppContainer(AppStackNavigator);
   
  export default class Navigator extends React.Component {
   
    render() {
      return <AppContainer />;
    }
  }