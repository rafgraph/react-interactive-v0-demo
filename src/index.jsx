import React from 'react';
import { render } from 'react-dom';
import style from './style';
import Interactive from '../../react-interactive-component/src/index';

function App() {
  return (
    <div style={style.root}>
      <h1>head</h1>
      <Interactive />
    </div>
  );
}

render(<App />, document.getElementById('root'));
