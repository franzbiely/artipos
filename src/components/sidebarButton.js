import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class SidebarButton extends React.Component{
    render(){
        return(
            <Ionicons 
            name="md-menu"
            color="white"
            size={32}
            style={styles.button}
            onPress={() => {}}
            />
        )
    }
}
const styles = StyleSheet.create({
    button:{ 
        position: 'absolute',
        top: 12,
        left: 23,
        zIndex: 20
    }
})