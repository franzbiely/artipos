import React from 'react';
import { StyleSheet , View, StatusBar } from 'react-native';
import PopupButton from '../components/payButton';  
import { ListItem } from 'react-native-elements';

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
];
export default class OrderScreen extends React.Component {

    static navigationOptions = ({ navigation }) => { 
      return {
        title: navigation.getParam('tableNumber', 'Table Number'),
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0
          },                    
          headerTintColor: '#6F0000',
          headerTitleStyle: {
            fontFamily: 'Quicksand-Bold',
            fontWeight: undefined,
            fontSize: 20,
          }, 
        };  
      };  

  render() {  
    

    return (
      <View style={styles.container}>
        <View> 
          <StatusBar barStyle="dark-content" hidden = {false} translucent = {true}/>
        </View>
        <View style={styles.itemListContainer}>
          {
            list.map((l, i) => (
              <ListItem
                key={i}
                leftAvatar={{ source: { uri: l.avatar_url } }}
                title={l.name}
                subtitle={l.subtitle}
              />
            ))
          }
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
