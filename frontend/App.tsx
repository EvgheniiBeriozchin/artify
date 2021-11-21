/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';

import Map from './components/Map';
import Slide from './components/Slide';

const styles = {
  container: {
    flex: 1,
  },
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      panelData: null,
      panelReady: false,
    };
  }

  showPanel = (description) => {
    console.log("ShowPanel", description);
    this.setState({...this.state, panelReady: true, panelData: description});
  };

  render(){
    console.log("Rerender ", this.state.panelReady);
    return (
      <View style={styles.container}>
        <Map showPanel={this.showPanel} />
        {this.state.panelReady ? <Slide props={this.state.panelData} /> : <></>}
      </View>
    );
  }
}

export default App;
