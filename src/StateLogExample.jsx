import React from 'react';
import Interactive from '../../react-interactive-component/src/index';
import s from './stateLogExample.style';

class StateLogExample extends React.Component {
  constructor() {
    super();
    this.state = {
      iState: 'normal',
      focus: false,
      focusFrom: undefined,
      log: [],
      showLog: false,
    };
    this.track = { log: this.state.log };
    this.logId = 1;
    this.queue = [];
    this.mostRecentOnStateChangeIndex = undefined;
    this.onStateChangeCount = 1;
  }

  handleOnStateChange = ({ nextState }) => {
    this.setState(nextState);
    this.queue.push({
      logId: this.logId++,
      stateChangeNumber: this.onStateChangeCount,
      changes: [],
    });
    this.onStateChangeCount++;
    this.mostRecentOnStateChangeIndex = this.queue.length - 1;
  }
  handleEnterState = (state, focusFrom) => {
    this.queue[this.mostRecentOnStateChangeIndex].changes.push(
      this.createEnterLeaveStateLine('Enter', state, focusFrom)
    );
  }
  handleLeaveState = (state, focusFrom) => {
    this.queue[this.mostRecentOnStateChangeIndex].changes.push(
      this.createEnterLeaveStateLine('Leave', state, focusFrom)
    );
  }
  handleSetStateCallback = () => {
    this.printLog();
  }
  createEnterLeaveStateLine(transition, state, focusFrom) {
    return (
      <span style={s.changeStateLine}>
        {` ${transition} `}
        {s.codeWithSize(state)}
        {focusFrom && <span> from {s.codeWithSize(focusFrom)}</span>}
      </span>
    );
  }
  printLog() {
    this.track.log = this.track.log.concat(this.queue).slice(-15);
    this.setState(
      { log: this.track.log },
      () => { this.logNode && this.scrollLogtoBottom(); }
    );
    this.queue = [];
    this.mostRecentOnStateChangeIndex = undefined;
  }
  scrollLogtoBottom() {
    this.logNode.scrollTop = this.logNode.scrollHeight;
  }
  logEvent(event) {
    this.queue.push({
      logId: this.logId++,
      event,
    });
    this.printLog();
  }
  handleClick = () => {
    this.logEvent('click');
  }
  handleMouseClick = () => {
    this.logEvent('mouse click');
  }
  handleEnterKey = () => {
    this.logEvent('enter key');
  }
  handleTap = () => {
    this.logEvent('tap');
  }
  handleTapTwo = () => {
    this.logEvent('tap two');
  }
  handleTapThree = () => {
    this.logEvent('tap three');
  }
  handleTapFour = () => {
    this.logEvent('tap four');
  }
  toggleLog = (e) => {
    if (e.type === 'keydown') this.focusLog = true;
    this.forceShowHideNormal = true;
    this.setState(
      { showLog: !this.state.showLog },
      () => {
        this.focusLog = false;
        this.forceShowHideNormal = false;
      });
  }
  handleLogRef = (node) => {
    this.logNode = node;
    this.scrollLogtoBottom();
  }
  render() {
    return (
      <div style={s.root}>
        <h2 style={s.title}>Interactive and Focusable {s.code('div')}</h2>
        <Interactive
          as="div"
          style={s.button.style}
          normal={{
            style: s.button.normal,
            onEnter: this.handleEnterState,
            onLeave: this.handleLeaveState,
          }}
          hover={{
            style: s.button.hover,
            onEnter: this.handleEnterState,
            onLeave: this.handleLeaveState,
          }}
          hoverActive={{
            style: s.button.hoverActive,
            onEnter: this.handleEnterState,
            onLeave: this.handleLeaveState,
          }}
          touchActive={{
            style: s.button.touchActive,
            onEnter: this.handleEnterState,
            onLeave: this.handleLeaveState,
          }}
          keyActive={{
            style: s.button.keyActive,
            onEnter: this.handleEnterState,
            onLeave: this.handleLeaveState,
          }}
          focus={{
            style: s.button.focus,
            onEnter: this.handleEnterState,
            onLeave: this.handleLeaveState,
          }}
          onStateChange={this.handleOnStateChange}
          setStateCallback={this.handleSetStateCallback}
          onClick={this.handleClick}
          onMouseClick={this.handleMouseClick}
          onEnterKey={this.handleEnterKey}
          onTap={this.handleTap}
          onTapTwo={this.handleTapTwo}
          onTapThree={this.handleTapThree}
          onTapFour={this.handleTapFour}
        >
          {s.code(this.state.iState)}
          {this.state.focus && (
            <span>
              <span style={s.withFocus}> with </span>
              {s.code('focus')}
              <span style={s.focusFrom}>
                {' from '}
                {s.code(this.state.focusFrom)}
              </span>
            </span>
          )}
        </Interactive>
        {this.state.showLog &&
          <Interactive
            as="ul"
            style={s.logStyle}
            touchActive={{}} // so RI will turn off webkitTapHighlightColor
            refDOMNode={this.handleLogRef}
            focus={{
              focusFromTabStyle: s.button.focus,
            }}
            initialState={{ focus: this.focusLog }}
          >
            {
              this.state.log.map((logItem, idx, log) => {
                if (logItem.event) {
                  return <li style={s.eventLogLine} key={logItem.logId}>{logItem.event}</li>;
                }
                return (
                  <li style={s.changeLogLine(idx, log.length)} key={logItem.logId}>
                    <div style={s.changeTitle}>State Change {logItem.stateChangeNumber}</div>
                    <ul style={s.changeList}>
                      {logItem.changes.map((change, idx2) => (
                        <li style={s.changeItem} key={idx2}>&ndash; {change}</li>
                      ))}
                    </ul>
                  </li>
                );
              })
            }
          </Interactive>
        }
        <Interactive
          as="span"
          onClick={this.toggleLog}
          {...s.toggleLogLink}
          forceState={this.forceShowHideNormal ? { iState: 'normal' } : null}
        >{this.state.showLog ? 'hide log' : 'show log'}</Interactive>
      </div>
    );
  }
}

export default StateLogExample;
