
import React from 'react';
import {View} from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';
import PerformancePage from './PerformancePage';

const styles = {
    container: {
      flex: 1,
    },
  };

class Slide extends React.Component {
    constructor(props){
        console.log("props", props);
        super(props);
    }

    componentDidMount(): void {
        this.panel.show();
    }

    render() {   
        return (
        <SlidingUpPanel ref={c => (this.panel = c)}>
            <View style={styles.container}>
          <PerformancePage data={this.props.props} />
            </View>
            </SlidingUpPanel>)
    }
}

export default Slide;