import React from 'react';
import { StyleSheet, Text, View, Modal, Alert, TouchableHighlight, Dimensions } from 'react-native';
let deviceWidth = Dimensions.get('window').width;

export default class PopupButton extends React.Component {

      state = {
        modalVisible: false,
      };

      setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }

  render() {
    return ( 
        <View style={styles.container}>
            <View style={styles.container}>
            <Modal
            style={{flex:1, alignItems: 'center', justifyContent: 'center'}}
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            }}>
            <View style={styles.popupContainer}>
                <View style={styles.popupBox}>

                    <View style={styles.popupHead}>
                        <Text style={{color: '#6F0000'}}>{this.props.popupHeadName}</Text>
                    </View>

                    <View style={styles.popupBody}>
                        <View style={{alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
                            <Text style={styles.totalText}>Total:</Text><Text style={styles.totalText}> 120.00 </Text>
                        </View>
                        <View style={styles.buttonContainer}>
                            <View style={styles.button2}>
                                <TouchableHighlight
                                    style={styles.buttonCancel}
                                    onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                    }}>
                                    <Text style={styles.buttonText}>Cancel</Text>
                                </TouchableHighlight>
                            </View>
                            <View style={styles.button2}>
                                <TouchableHighlight
                                    style={styles.buttonConfirm}
                                    onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                    }}>
                                    <Text style={styles.buttonText}>Confirm</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>

                </View>
            </View>
            </Modal>
            <View style={styles.bottomContainer}>
                <View style={{flex:1}}>
                    <Text>Total:</Text>
                </View>
                <View style={{flex:1, alignItems:'flex-end'}}>
                    <TouchableHighlight style={styles.popupButton} onPress={() => {this.setModalVisible(true);}}>
                        <Text style={styles.popupText}>
                                    {this.props.name}
                        </Text>
                    </TouchableHighlight>
                </View>
               
            </View>
        </View>
    </View>    
    );
  }
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    popupText:{
        fontWeight: '900',
        fontSize: 15,
        color: 'white',
        fontFamily: 'Raleway'
    },
    popupBox:{
        width:deviceWidth-60,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0, 
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    popupHead:{   
        height: 50,
        width: '100%', 
        alignItems: 'center',
        justifyContent:'center',
        padding: 10,
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderBottomWidth: 1,
        borderColor: '#f2f2f2',
        borderTopRightRadius: 10
    },
    popupBody:{
        width: '100%',
        backgroundColor: 'white',
        padding: 20,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center'
   },
    popupContainer:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    popupContent:{
        color: 'white',
        fontWeight: "900",
        fontSize: 20 
    },
    popupButton:{
        width: 150, 
        height: 50, 
        backgroundColor: '#6F0000',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center' 
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20
    },
    button2:{
        width: '48%'
    },
    buttonText:{
        fontSize: 18,
        color: 'white',
        fontFamily: 'Raleway-Medium'
    },
    buttonCancel:{
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 10,
        marginRight: 10
    },
    buttonConfirm:{
        backgroundColor: 'darkred',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 10
    },
    totalText:{
        fontSize: 30
    },
    bottomContainer:{
        flexDirection: 'row',
        width: '100%',
        position: 'absolute',
        bottom: 0,   
        borderTopWidth: 1,
        borderColor: '#f2f2f2', 
        padding: 20,
        backgroundColor: 'white'
    }
});