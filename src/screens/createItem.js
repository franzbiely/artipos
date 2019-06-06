import React from 'react';
import { StyleSheet, View, StatusBar, TextInput, Text, Dimensions, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
export default class CreateItemScreen extends React.Component {

   static navigationOptions = { 
        header: null 
  };  

  render() {  

    return (
      <View style={styles.container}>
        <View>
          <StatusBar barStyle = "dark-content" hidden = {false} translucent = {true}/>
        </View>
        <View style={{width:'100%', textAlign:'left', position:'absolute', top:40, left: 20, flexDirection:'row', alignItems: 'center'}}>
          <Icon name="md-menu" style={{marginTop: 8}} color="#6F0000" size={32} onPress={() => this.props.navigation.openDrawer()} />
          <Text style={styles.titleText} >Create Item</Text>     
        </View>
        <View style={styles.inputTextBox}>
            <View style={styles.inputTextContainer}>
                <Text style={styles.label}>Create Item *</Text>
                <TextInput style={styles.inputText} placeholder="Item name"></TextInput>  
            </View>
            <View style={styles.inputTextContainer}>
                <Text style={styles.label}>Item Price *</Text>
                <TextInput style={styles.inputText} keyboardType = 'numeric' placeholder="Item price"></TextInput>  
            </View>
            <View style={styles.inputTextContainer}>
                <Text style={styles.label}>Sale Price *</Text>
                <TextInput style={styles.inputText} keyboardType = 'numeric' placeholder="Sale price"></TextInput>  
            </View>
        </View>
        
        <View>
            <TouchableOpacity style={styles.loginButton} onPress={() => this.props.navigation.navigate('createitem')}><Text style={styles.buttonText}> Add Another item </Text></TouchableOpacity>
        </View>
        <View style={{marginTop: -25}}>
            <TouchableOpacity style={styles.loginButton} onPress={() => this.props.navigation.navigate('table')}><Text style={styles.buttonText}> Continue </Text></TouchableOpacity>
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
      fontSize:40,
      color: "#870000",
      marginLeft: 25
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
    inputTextBox:{
      marginTop: 100
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
