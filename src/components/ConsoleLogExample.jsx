/* eslint no-console: "off" */
import React from 'react';
import Interactive from 'react-interactive';
import s from './consoleLogExample.style';

class ConsoleLogExample extends React.Component {
  constructor() {
    super();
    this.state = {
      iState: 'normal',
      focus: false,
      focusFrom: undefined,
    };
  }
  handleEnterState = (state, focusFrom) => {
    console.log('onEnter:', state, focusFrom || '');
  }
  handleLeaveState = (state, focusFrom) => {
    console.log('onLeave:', state, focusFrom || '');
  }
  handleOnStateChange = (changes) => {
    changes.event.persist();
    console.log('onStateChange:', changes);
    this.setState(changes.nextState);
  }
  handleSetStateCallback = (changes) => {
    console.log('setStateCallback:', changes);
    console.log('');
  }
  handleClick = (e) => {
    e.persist();
    console.log('onCick:', e);
    console.log('');
  }
  handleMouseClick = (e) => {
    e.persist();
    console.log('onMouseClick:', e);
    console.log('');
  }
  handleEnterKey = (e) => {
    e.persist();
    console.log('onEnterKey:', e);
    console.log('');
  }
  handleTap = (e) => {
    e.persist();
    console.log('onTap:', e);
    console.log('');
  }
  render() {
    return (
      <div style={s.root}>
        <h2 style={s.title}>The Logger</h2>
        {
          // show info on hover, active (except keyActive), and focus from tab or touch
          (/hover/.test(this.state.iState) ||
          (/Active/.test(this.state.iState) && this.state.iState !== 'keyActive') ||
          this.state.focusFrom === 'tab' || this.state.focusFrom === 'touch') &&
            <span style={s.info}> &ndash; check the{' '}
              {s.code('console')}
            </span>
        }
        <Interactive
          as="div"
          style={s.button.style}
          className="some-class"
          normal={{
            style: s.button.normal,
            className: 'normal-state',
            onEnter: this.handleEnterState,
            onLeave: this.handleLeaveState,
          }}
          hover={{
            style: s.button.hover,
            className: 'hover-state',
            onEnter: this.handleEnterState,
            onLeave: this.handleLeaveState,
          }}
          hoverActive={{
            style: s.button.hoverActive,
            className: 'hover-active-state',
            onEnter: this.handleEnterState,
            onLeave: this.handleLeaveState,
          }}
          touchActive={{
            style: s.button.touchActive,
            className: 'touch-active-state',
            onEnter: this.handleEnterState,
            onLeave: this.handleLeaveState,
          }}
          keyActive={{
            style: s.button.keyActive,
            className: 'key-active-state',
            onEnter: this.handleEnterState,
            onLeave: this.handleLeaveState,
          }}
          focus={{
            style: s.button.focus,
            className: 'focus-state',
            onEnter: this.handleEnterState,
            onLeave: this.handleLeaveState,
          }}
          onStateChange={this.handleOnStateChange}
          setStateCallback={this.handleSetStateCallback}
          onClick={this.handleClick}
          onMouseClick={this.handleMouseClick}
          onEnterKey={this.handleEnterKey}
          onTap={this.handleTap}
        >
          {s.code('console.log(...)')}
        </Interactive>

      </div>
    );
  }
}

export default ConsoleLogExample;
