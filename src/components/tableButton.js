import React from 'react';
import { StyleSheet, Image, View, TouchableOpacity, Text } from 'react-native';

export default class TableButton extends React.Component { 

  render() { 
    return (
        <TouchableOpacity style={styles.tableButton} onPress={() => this.props.navigation.navigate(this.props.target, {tableNumber:this.props.tableNumber})}>
          <Image style={{width: 100, height: 100, resizeMode : 'contain'}} source={this.props.image} />
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tableButton:{
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: 100,
    height: 100,
    margin: 10
  },

  tableText:{
    fontSize: 20,
    color: 'white',
    fontWeight: "900"
  },
});
