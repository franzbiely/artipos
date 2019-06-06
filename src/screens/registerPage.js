import React from 'react';
import { StyleSheet, View, StatusBar, TextInput, Text, Dimensions, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';

export default class RegisterScreen extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
          Checked: true
        }
      }
   static navigationOptions = { 
        title: "Register",  
      };  
      
  render() {  

    return (
      <View style={styles.container}>
        <View>
          <StatusBar barStyle="dark-content" />
        </View>
        <View style={{width:'100%', textAlign:'left', marginTop: 40, marginLeft: 40}}>
          <Text style={styles.titleText}>Register</Text>
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
            <View style={styles.inputTextContainer}>
                <Text style={styles.label}>Business Name</Text>
                <TextInput style={styles.inputText} placeholder="Business Name" ></TextInput>
            </View>
            <View style={styles.inputTextContainer}>
                <Text style={styles.label}>Province</Text>
                <TextInput style={styles.inputText} placeholder="Province" ></TextInput>
            </View>
            <View style={styles.inputTextContainer}>
                <Text style={styles.label}>City</Text>
                <TextInput style={styles.inputText} placeholder="City" ></TextInput>
            </View>
        </View>
        <View style={{marginTop: 20}}>
            <CheckBox containerStyle={{width: Dimensions.get('window').width-50, padding: 15}} textStyle={{
                fontFamily: 'Raleway-Light',
                fontWeight: undefined
            }}
            checked={this.state.checked}   
            onPress={() => this.setState({checked: !this.state.checked})} 
            title='I understand and agree to Artificer POS Terms of Use and Privacy Policy.'>

            </CheckBox>
        </View>
        <View>
            <TouchableOpacity style={styles.loginButton} onPress={() => this.props.navigation.navigate('table')}><Text style={styles.buttonText} >Register</Text></TouchableOpacity>
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
    titleText:{
      fontFamily: 'Quicksand-Light',
      fontSize: 40,
      color: "#870000"
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
