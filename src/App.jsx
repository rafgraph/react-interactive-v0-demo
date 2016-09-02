import React from 'react';
import style from './app.style.js';
import Interactive from '../../react-interactive-component/src/index';

function App() {
  return (
    <div style={style.root}>
      App component
      <Interactive as="div" hover={{ color: 'green' }}>Interactive component</Interactive>
    </div>
  );
}

export default App;
