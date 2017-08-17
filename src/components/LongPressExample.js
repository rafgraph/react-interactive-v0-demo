import React from 'react';
import Interactive from 'react-interactive';
import objectAssign from 'object-assign';
import s from '../styles/longPressExample.style';

class LongPressExample extends React.Component {
  constructor() {
    super();
    this.state = {
      longPress: false,
      longPressCount: 0,
    };
  }

  handleLongPress = () => {
    this.setState({
      longPress: true,
      longPressCount: this.state.longPressCount + 1,
    });
  };

  handleOnStateChange = ({ nextState }) => {
    if (nextState.iState !== 'touchActive') this.setState({ longPress: false });
  };

  render() {
    return (
      <div style={s.root}>
        <h2 style={s.title}>Long Press</h2>
        <ul style={s.list}>
          <li style={s.listItem}>
            &ndash; {s.code('onLongPress')} callback fires after a 500ms touch
            (time is configurable).
          </li>
        </ul>
        <Interactive
          as="div"
          style={objectAssign(
            {},
            s.button.style,
            this.state.longPress ? s.button.longPress : {},
          )}
          tabIndex={null}
          role={null}
          useBrowserCursor
          onStateChange={this.handleOnStateChange}
          onLongPress={this.handleLongPress}
          tapTimeCutoff={500}
        >
          {s.code('longPress')} counter: {s.code(this.state.longPressCount)}
        </Interactive>
      </div>
    );
  }
}

export default LongPressExample;
