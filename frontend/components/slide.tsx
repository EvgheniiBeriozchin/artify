import React from 'react';
import {View} from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';
import PerformancePage from './performance_page';
import {baseContainerStyles} from './stylesheets';

interface SlideProps {
  closePanel: () => void;
  data: Object;
}

class Slide extends React.Component {
  constructor(props: SlideProps) {
    super(props);
  }

  componentDidMount(): void {
    this.panel.show();
  }

  componentWillUnmount() {
    this.props.closePanel();
  }

  render() {
    return (
      <SlidingUpPanel
        ref={c => (this.panel = c)}
        onBottomReached={this.props.closePanel}>
        <View style={baseContainerStyles.container}>
          <PerformancePage data={this.props.data} />
        </View>
      </SlidingUpPanel>
    );
  }
}

export default Slide;
