import React from 'react';
import { createStackNavigator, createAppContainer, createDrawerNavigator, Header } from 'react-navigation';
import TableScreen from './screens/tableScreen';
import OrderScreen from './screens/orderScreen';
import LoginScreen from './screens/loginPage';
import RegisterScreen from './screens/registerPage';
import ForgotPasswordScreen from './screens/forgotPassword';
import ResetPasswordScreen from './screens/resetPassword';
import CreateItemScreen from './screens/createItem';
import CreateDiscountScreen from './screens/createDiscount';
import FirstScreen from './screens/landingPage';
import SidebarButton from './components/sidebarButton';

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
 
  const AppStackNavigator = createStackNavigator({
      landing: {
        screen: FirstScreen,
        navigationOptions: {
          header: null,
      },
      },
      table: {
        screen: TableScreen,
        navigationOptions:{
          headerLeft: <SidebarButton alert="yes"/>,
        }
      },
      order: OrderScreen, 
      login: LoginScreen,
      register: RegisterScreen,
      forgotpassword: ForgotPasswordScreen,
      resetpassword: ResetPasswordScreen,
      createitem: CreateItemScreen,
      creatediscount: CreateDiscountScreen
      },      
      {    

      initialRouteName: 'landing',   
      transitionConfig: navigationConfig,
      defaultNavigationOptions:{
        headerStyle: {
          backgroundColor: '#6F0000',
        },                    
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: 'Quicksand-Bold',
          fontWeight: undefined,
          fontSize: 17,
          marginLeft: -2

        },
      } 
        
  }
    );
  // const AppDrawerNavigator = createDrawerNavigator({
  //   table: AppStackNavigator
  // });     
  const AppContainer = createAppContainer(AppStackNavigator);

  export default class Navigator extends React.Component {
   
    render() {
      return <AppContainer />;
    }
  }
  