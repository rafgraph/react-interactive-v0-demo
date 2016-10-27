import React from 'react';
import Interactive from '../../../react-interactive-component/src/index';
import s from './inputExample.style';

function InputExample() {
  return (
    <div style={s.root}>
      <h2 style={s.title}>Input</h2>
      <TextInput />
    </div>
  );
}


class TextInput extends React.Component {
  constructor() {
    super();
    this.state = {
      focus: false,
      value: '',
    };
  }

  handleEnterFocus = () => {
    this.setState({ focus: true });
  }
  handleLeaveFocus = () => {
    this.setState({ focus: false });
  }
  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div>
        <Interactive
          as="input"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          {...s.input} // provides style, hover, and active props
          focus={{
            style: s.input.focus.style,
            focusFromTouchStyle: s.input.focus.focusFromTouchStyle,
            onEnter: this.handleEnterFocus,
            onLeave: this.handleLeaveFocus,
          }}
        />
        {this.state.focus &&
          <span style={s.focusInstructions}>This has foucs for typing</span>
        }
      </div>
    );
  }
}

export default InputExample;
