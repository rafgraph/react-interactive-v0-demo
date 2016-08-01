import React from 'react';
import { render } from 'react-dom';
import Interactive from '../react-interactive-component/src/index';

function App() {
  return (
    <div>
      <Interactive />
    </div>
  );
}

render(<App />, document.getElementById('root'));
