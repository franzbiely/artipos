import React from 'react';
import { StyleSheet , View, StatusBar } from 'react-native';
import PopupButton from '../components/payButton';  
import SidebarButton from '../components/sidebarButton';

export default class OrderScreen extends React.Component {

    static navigationOptions = ({ navigation }) => { 
      return {
        title: navigation.getParam('tableNumber', 'Table Number'),
        headerLeft: <SidebarButton />, 
      };  
    }; 

  render() {  

    return (
      <View style={styles.container}>
        <View>
          <StatusBar barStyle = "light-content" hidden = {false} translucent = {true}/>
        </View>
        <PopupButton popupHeadName={this.props.navigation.state.params.tableNumber} name='Pay'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      flex: 1,
      backgroundColor:'#6F0000', 
      alignItems: 'center',
      justifyContent: 'center',
    },
});
