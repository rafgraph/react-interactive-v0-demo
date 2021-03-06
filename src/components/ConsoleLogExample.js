/* eslint no-console: "off" */
import React from 'react';
import Interactive from 'react-interactive';
import s from '../styles/consoleLogExample.style';

class ConsoleLogExample extends React.Component {
  constructor() {
    super();
    this.state = {
      iState: 'normal',
      focus: false,
    };
  }
  handleOnStateChange = changes => {
    changes.event.persist();
    console.log('onStateChange:', changes);
    this.setState(changes.nextState);
  };
  handleSetStateCallback = changes => {
    console.log('setStateCallback:', changes);
    console.log('');
  };
  handleClick = (e, clickType) => {
    e.persist();
    console.log('onCick:', clickType, e);
    console.log('');
  };
  render() {
    return (
      <div style={s.root}>
        <h2 style={s.title}>The Logger</h2>
        {// show info on hover, active (except keyActive), and focus from tab or touch
        (/hover/.test(this.state.iState) ||
          this.state.iState === 'touchActive' ||
          this.state.focus === 'tab' ||
          this.state.focus === 'touch') &&
          <span style={s.info}>
            {' '}&ndash; check the {s.code('console')}
          </span>}
        <Interactive
          as="div"
          style={s.button.style}
          className="some-class"
          normal={{
            style: s.button.normal,
            className: 'normal-state',
          }}
          hover={{
            style: s.button.hover,
            className: 'hover-state',
          }}
          hoverActive={{
            style: s.button.hoverActive,
            className: 'hover-active-state',
          }}
          touchActive={{
            style: s.button.touchActive,
            className: 'touch-active-state',
          }}
          keyActive={{
            style: s.button.keyActive,
            className: 'key-active-state',
          }}
          focus={{
            style: s.button.focus,
            className: `focus-from-${this.state.focus}`,
          }}
          onStateChange={this.handleOnStateChange}
          setStateCallback={this.handleSetStateCallback}
          onClick={this.handleClick}
        >
          {s.code('console.log(...)')}
        </Interactive>
      </div>
    );
  }
}

export default ConsoleLogExample;
