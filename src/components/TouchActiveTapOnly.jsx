import React from 'react';
import Interactive from '../../../react-interactive-component/src/index';
import s from './touchActiveTapOnly.style';

class TouchActiveTapOnly extends React.Component {
  constructor() {
    super();
    this.state = {
      tapCount: 0,
    };
  }
  handleClick = (e, clickType) => {
    if (clickType === 'tapClick') this.setState({ tapCount: this.state.tapCount + 1 });
  }

  render() {
    return (
      <div style={s.root}>
        <h2 style={s.title}>Tap Active</h2>
        <ul style={s.list}>
          <li style={s.listItem}>
            &ndash; Only in the {s.code('touchActive')} state while a {s.code('tap')} is possible.
          </li>
        </ul>
        <Interactive
          as="div"
          style={s.button.style}
          {...s.button}
          touchActiveTapOnly
          tabIndex={null}
          role={null}
          useBrowserCursor
          onClick={this.handleClick}
        >
          {s.code('tap')} counter: {s.code(this.state.tapCount)}
        </Interactive>

      </div>
    );
  }
}

export default TouchActiveTapOnly;
