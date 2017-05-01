import React from 'react';
import Interactive from 'react-interactive';
import s from '../styles/inputExample.style';

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

  handleOnStateChange = ({ nextState }) => {
    if (this.state.focus !== nextState.focus) this.setState({ focus: nextState.focus });
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
          onStateChange={this.handleOnStateChange}
          {...s.input} // provides style, hover, and active props
          touchActiveTapOnly
        />
        {this.state.focus &&
          <span style={s.focusInstructions}>This has focus for typing</span>
        }
      </div>
    );
  }
}

export default InputExample;
