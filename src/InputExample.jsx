import React from 'react';
import Interactive from '../../react-interactive-component/src/index';
import style from './inputExample.style';

function InputExample() {
  return (
    <div style={style.root}>
      <h2 style={style.title}>Input</h2>
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
    this.setState({ value: e.value });
  }

  render() {
    return (
      <div>
        <Interactive
          as="input"
          type="text"
          hover={style.input.hover}
          active="hover"
          focus={{
            style: style.input.focus,
            onEnter: this.handleEnterFocus,
            onLeave: this.handleLeaveFocus,
          }}
          style={style.input.style}
          value={this.state.value}
          onChange={this.handleChange}
        />
        {this.state.focus &&
          <span style={style.focusInstructions}>This has foucs for typing</span>
        }
      </div>
    );
  }
}

export default InputExample;
