import React from 'react';
import Navigator from './src/screenNavigator';
import { Font } from 'expo';

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {    
      fontLoaded: false
    }
  }

  async componentDidMount() {
     await Font.loadAsync({
      'Raleway': require('./assets/fonts/Raleway-Regular.ttf'),
      'Raleway-Bold': require('./assets/fonts/Raleway-Bold.ttf'),
      'Raleway-Italic': require('./assets/fonts/Raleway-Italic.ttf'),
      'Raleway-Medium': require('./assets/fonts/Raleway-Medium.ttf'),
      'Raleway-Light': require('./assets/fonts/Raleway-Light.ttf'),
      'Quicksand-Medium': require('./assets/fonts/Quicksand-Medium.ttf'),
      'Quicksand-Bold': require('./assets/fonts/Quicksand-Bold.ttf'),
      'Quicksand-Light': require('./assets/fonts/Quicksand-Light.ttf')
      
    });
    // console.log('font loaded');
    this.setState({fontLoaded: true})
  }
  render() {
    return this.state.fontLoaded ?(
     <Navigator />
      
    ):
    (
      null
    )
  }
}

