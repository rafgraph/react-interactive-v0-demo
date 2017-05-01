import React from 'react';
import Interactive from 'react-interactive';
import s from '../styles/stateLogExample.style';

class StateLogExample extends React.Component {
  static createEnterLeaveStateLine(transition, state, focusFrom) {
    return (
      <span style={s.changeStateLine}>
        {` ${transition} `}
        {s.codeWithSize(state)}
        {focusFrom && <span> from {s.codeWithSize(focusFrom)}</span>}
      </span>
    );
  }

  constructor() {
    super();
    this.state = {
      iState: 'normal',
      focus: false,
      log: [],
      showLog: false,
    };
    this.track = { log: this.state.log };
    this.logId = 1;
    this.queue = [];
    this.onStateChangeCount = 1;
  }

  handleOnStateChange = ({ prevState, nextState }) => {
    this.setState(nextState);
    this.queue.push({
      logId: this.logId++,
      stateChangeNumber: this.onStateChangeCount++,
      changes: (() => {
        const changes = [];
        if (prevState.iState !== nextState.iState) {
          changes.push(StateLogExample.createEnterLeaveStateLine('Leave', prevState.iState));
          changes.push(StateLogExample.createEnterLeaveStateLine('Enter', nextState.iState));
        }
        if (prevState.focus !== nextState.focus) {
          changes.push(StateLogExample.createEnterLeaveStateLine(
            nextState.focus ? 'Enter' : 'Leave',
            'focus',
            nextState.focus ? nextState.focus : prevState.focus,
          ));
        }
        return changes;
      })(),
    });
  }
  handleSetStateCallback = () => {
    this.printLog();
  }
  printLog() {
    this.track.log = this.track.log.concat(this.queue).slice(-15);
    this.setState(
      { log: this.track.log },
      () => { this.logNode && this.scrollLogtoBottom(); },
    );
    this.queue = [];
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
  handleClick = (e, clickType) => {
    this.logEvent(`click - ${clickType}`);
  }
  handleTapTwo = () => {
    this.logEvent('tap two');
  }
  toggleLog = (e, clickType) => {
    if (clickType === 'keyClick') this.focusLog = true;
    this.setState(
      { showLog: !this.state.showLog },
      () => {
        this.focusLog = false;
        if (!this.state.showLog) this.logNode = null;
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
          normal={s.button.normal}
          hover={s.button.hover}
          hoverActive={s.button.hoverActive}
          touchActive={s.button.touchActive}
          keyActive={s.button.keyActive}
          focus={s.button.focus}

          onStateChange={this.handleOnStateChange}
          setStateCallback={this.handleSetStateCallback}
          onClick={this.handleClick}
          onTapTwo={this.handleTapTwo}
        >
          <div
            style={s.buttonCover}
            // required so clicks fall on this div and not the button text which changes
            // if the click lands on an element that is then removed from the DOM it will be dropped
          />
          <div style={s.buttonTextWrapper}>
            {s.code(this.state.iState)}
            {this.state.focus && (
              <span>
                <span style={s.withFocus}> with </span>
                {s.code('focus')}
                <span style={s.focusFrom}>
                  {' from '}
                  {s.code(this.state.focus)}
                </span>
              </span>
            )}
          </div>
        </Interactive>
        {this.state.showLog &&
          <Interactive
            as="ul"
            style={s.logStyle}
            touchActive={{}} // so RI will turn off webkitTapHighlightColor
            refDOMNode={this.handleLogRef}
            focusFromTab={s.button.focus}
            initialState={{ focus: this.focusLog ? 'tab' : false }}
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
          touchActiveTapOnly
        >{this.state.showLog ? 'hide log' : 'show log'}</Interactive>
      </div>
    );
  }
}

export default StateLogExample;
