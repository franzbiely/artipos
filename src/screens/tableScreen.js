import React from 'react';
import { StyleSheet, View, StatusBar, Text} from 'react-native';
import TableButton from '../components/tableButton';
import SidebarButton from '../components/sidebarButton';  
import { Icon } from 'native-base';
export default class TableScreen extends React.Component {

  static navigationOptions =  {
      header:null,
  }; 
  render() { 
   
    return (
      <View style={styles.container}> 
        <View>
          <StatusBar barStyle = "dark-content"/>
        </View>
        <View style={{width:'100%', textAlign:'left', position:'absolute', top:40, left: 20, flexDirection:'row', alignItems: 'center'}}>
          <Icon name="md-menu" style={{marginTop: 8}} color="#6F0000" size={32} onPress={() => this.props.navigation.openDrawer()} />
          <Text style={styles.titleText} >Dashboard</Text>     
        </View>
                                          
        <View style={styles.tableContainer}>
          <TableButton navigation={this.props.navigation} tableNumber="Table 1" target="order" image={require('../../assets/images/table1x1.png')}/>
          <TableButton navigation={this.props.navigation} tableNumber="Table 2" target="order" image={require('../../assets/images/table2x2.png')}/>
          <TableButton navigation={this.props.navigation} tableNumber="Table 3" target="order" image={require('../../assets/images/table3x3.png')}/>
        </View>

      </View>
    );
  }
} 
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center' 
  },
  titleText:{
    fontFamily: 'Quicksand-Light',
    fontSize: 40,
    color: "#870000",
    marginLeft: 25
  },
  tableButton:{
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: 100,
    height: 100,
  },

  tableText:{
    fontSize: 20,
    color: 'white',
    fontWeight: "900"
  },
  tableContainer:{
    flexDirection: 'column',
    marginTop: 30
  },
  welcome:{

  }

});

