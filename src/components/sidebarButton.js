import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class SidebarButton extends React.Component{
//    test( ){
//         console.log('alertWord');
//     }
    render(){
        return(
            <TouchableOpacity style={styles.burger} onPress={() => this.props.navigation.openDrawer()}>
                <Ionicons   
                name="md-menu"
                color="white"
                size={32}  
                style={styles.button}
                />
            </TouchableOpacity>
        )
    }
   
}
const styles = StyleSheet.create({
    button:{ 
    },
    burger: {
        top: 1,
        left: 10,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    }   
});