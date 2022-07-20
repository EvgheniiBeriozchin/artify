import React from 'react';
import {View} from 'react-native';

import CircularButton from './circular_button';
import Map from './map';
import Slide from './slide';
import {mainAppStyles} from './stylesheets';

class MainApp extends React.Component {
  constructor(props: {}) {
    super(props);
    this.state = {
      panelData: null,
      panelReady: false,
      centerUserLocation: false,
    };
  }

  showPanel = (description: string) => {
    this.setState({...this.state, panelReady: true, panelData: description});
  };

  closePanel = () => {
    this.setState({...this.state, panelReady: false});
  };

  onPress1 = () => {
    return fetch('http://10.10.2.87:3000/performances/get')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => {
        console.error(error);
      });
  };

  onPressCenterUserLocation = () => {
    this.setState({centerUserLocation: true});
  };

  unsetCenterUserLocation = () => {
    this.setState({centerUserLocation: false});
  };

  render() {
    return (
      <View style={mainAppStyles.container}>
        <Map
          showPanel={this.showPanel}
          centerUserLocation={this.state.centerUserLocation}
          setCenterUserLocationFalse={this.unsetCenterUserLocation}
        />
        {this.state.panelReady ? (
          <Slide data={this.state.panelData} closePanel={this.closePanel} />
        ) : (
          <View style={mainAppStyles.buttons}>
            <View style={mainAppStyles.button_wrapper}>
              <CircularButton
                name={'place'}
                onPress={this.onPressCenterUserLocation}
              />
            </View>
            <CircularButton name={'add'} onPress={this.onPress1} />
          </View>
        )}
      </View>
    );
  }
}

export default MainApp;
