import React from 'react';
import { StyleSheet, View, StatusBar} from 'react-native';
import TableButton from '../components/tableButton';
import SidebarButton from '../components/sidebarButton';

export default class TableScreen extends React.Component {

  static navigationOptions =  {
      title: "Home",
      headerLeft: <SidebarButton />,
  }; 

  render() { 
   
    return (
      <View style={styles.container}> 
        <View>
          <StatusBar barStyle = "light-content" hidden = {false} translucent = {true}/>
        </View>
        <View style={styles.welcome}> 

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
    justifyContent: 'center',
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
    flexDirection: 'row',
    marginTop: 30
  }, 
  welcome:{

  }

});

