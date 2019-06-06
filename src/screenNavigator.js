import React from 'react';
import { SafeAreaView, ScrollView, Dimensions, Image, View } from 'react-native';
import { createStackNavigator, createAppContainer, createDrawerNavigator, DrawerItems } from 'react-navigation';
import TableScreen from './screens/tableScreen';
import OrderScreen from './screens/orderScreen';
import LoginScreen from './screens/loginPage';
import RegisterScreen from './screens/registerPage';
import ForgotPasswordScreen from './screens/forgotPassword';
import ResetPasswordScreen from './screens/resetPassword';
import CreateItemScreen from './screens/createItem';
import CreateDiscountScreen from './screens/createDiscount';
import FirstScreen from './screens/landingPage';
import { Ionicons } from '@expo/vector-icons';
import { Icon } from 'native-base';
export default class Navigator extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)
  }
  render() {
    return <AppContainer />;
  }
}

export const FadeTransition  = (index, position) => {

    const sceneRange = [index-1, index];
    const outputOpacity = [0,1];
    const transition = position.interpolate({
      inputRange: sceneRange,
      outputRange: outputOpacity,
    });
    return{
      opacity: transition
    }
  }
  
  export const navigationConfig = () => {
    return{
      screenInterpolator: (sceneProps) => {
        const position = sceneProps.position;
        const scene = sceneProps.scene;
        const index = scene.index;
  
        return FadeTransition(index,position);
      }
    }   
  }
 
  const MainStack = createStackNavigator(
    {
      table: TableScreen,
      order: OrderScreen,
    },      
    {       
      transitionConfig: navigationConfig,
      contentOptions:{
        activeTintColor: '#6F0000'
      } 
    }
  );
  const CreateDiscount = createStackNavigator(
    {
      creatediscount: 
      {
        screen: CreateDiscountScreen
      }
    },
    {
      defaultNavigationOptions:{
        headerStyle: {
          backgroundColor: '#6F0000',
        },                    
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: 'Quicksand-Bold',
          fontWeight: undefined,
          fontSize: 17,
          marginLeft:20
        }, 
      } 
    }
  );
  const CreateItem = createStackNavigator(
    {
      createitem: 
      {
        screen: CreateItemScreen
      }
    }
  );
  const CustomDrawerComponent = (props) => ( 
    <SafeAreaView style={{flex: 1, marginTop: 50}}>
      <View style={{alignItems: 'center', justifyContent: 'center', marginBottom: 30, marginTop: 30}}>
        <Image style={{width:100, height: 100, resizeMode : 'contain'}} source={require('../assets/images/pos-logo.png')}></Image>
      </View>
      <ScrollView>
        <DrawerItems {...props} />
      </ScrollView>
    </SafeAreaView>
  )
  const Drawer = createDrawerNavigator(
    {    
      Dashboard: 
        {  
          screen: MainStack,
          navigationOptions:{
          drawerIcon : ({ tintColor }) => (
            <Icon name="home" style={{fontSize: 30, color: tintColor}} />
          )  
        }
        },
      CreateItem:{
          screen: CreateItem,
          navigationOptions:{
            title: 'Create Item',
            drawerIcon : ({ tintColor }) => (
              <Icon name="add-circle" style={{fontSize: 30, color: tintColor}} />
            ) 
          }
      },
      CreateDiscount:{
          screen: CreateDiscount,
          navigationOptions:{
            title: 'Create Discount',
            drawerIcon : ({ tintColor }) => (
              <Icon name="pricetag" style={{fontSize: 30, color: tintColor}} />
            )
          }
      }
    },
    { 
      contentComponent: CustomDrawerComponent,
      contentOptions:{
        activeTintColor: '#6F0000',
        labelStyle:{ 
          fontWeight: undefined,
          fontSize: 20,
          fontFamily: 'Quicksand-Bold'
        
        }
      }
  }
  );
  const LoginStack = createStackNavigator(
    {
      landing: FirstScreen,
      login: LoginScreen,
      register: RegisterScreen, 
      forgotpassword: ForgotPasswordScreen,
      resetpassword: ResetPasswordScreen,
      drawer: Drawer
    },
    {
      defaultNavigationOptions:{
        header: null
      }
    }
  );
  const AppContainer = createAppContainer(LoginStack);


  
