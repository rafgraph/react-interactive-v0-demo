import React from 'react';
import Interactive from '../../react-interactive-component/src/index';
import style from './app.style';

import LinkExample from './LinkExample';
import InputExample from './InputExample';

function App() {
  return (
    <div style={style.root}>
      <h1 style={style.title}>React Interactive</h1>
      <div style={style.repoLink}><Interactive
        as="a"
        href="https://github.com/rafrex/react-interactive"
        // use the spread operator to add state styles - equivalent to commented code below
        {...style.link}
        // normal={style.link.normal}
        // hover={style.link.hover}
        // active={style.link.active}
        // touchActive={style.link.touchActive}
        // style={style.link.style}
      >https://github.com/rafrex/react-interactive</Interactive></div>

      <LinkExample />
      <InputExample />

      <div style={style.creditLine}>{'Code and concept by '}
        <Interactive
          as="a"
          href="http://www.rafaelpedicini.com/"
          {...style.link}
        >Rafael Pedicini</Interactive>
      </div>
    </div>
  );
}

export default App;
