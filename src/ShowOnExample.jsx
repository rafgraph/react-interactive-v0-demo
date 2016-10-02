import React from 'react';
import Interactive from '../../react-interactive-component/src/index';
import s from './showOnExample.style';

// show on: hover, touchActive and focusFromTab (includes hoverActive)
class ShowOnExample extends React.Component {
  constructor() {
    super();
    this.state = {
      showInfo: false,
    };
  }
  handleStateChange = ({ nextState }) => {
    if (/hover/.test(nextState.iState) ||
    /Active/.test(nextState.iState) ||
    nextState.focusFrom === 'tab') {
      this.setState({ showInfo: true });
    } else {
      this.setState({ showInfo: false });
    }
  }
  render() {
    return (
      <div style={s.root}>
        <h2 style={s.title}>Show On</h2>
        <div style={s.infoBox}>
          {this.state.showInfo ?
            <span style={s.infoText}>Some info to show about something</span>
            :
            <span style={s.subTitle}>
              {s.code('hover')}, {s.code('touchActive')},
              and {s.code('focus')} from {s.code('tab')}
            </span>
          }
        </div>
        <Interactive
          as="span"
          {...s.infoButton}
          onStateChange={this.handleStateChange}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            style={s.svg}
          >
            <path
              d="M15.5,26.97C9.71,26.97,5,22.259,5,16.47c0-5.79,4.71-10.5,10.5-10.5S26,10.67,26,
              16.47 S21.3,26.97,15.5,26.97 M15.5,7.983c-4.682,0-8.488,3.807-8.488,8.487c0,4.7,3.8,
              8.5,8.5,8.5c4.681,0,8.488-3.808,8.488-8.488 c-0.012-4.712-3.8-8.512-8.5-8.512 M14,
              16.001h3v7h-3V16.001z M14,11.001h3v3h-3V11.001z"
            />
          </svg>
        </Interactive>
      </div>
    );
  }
}

export default ShowOnExample;
