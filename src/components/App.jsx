import React from 'react';
import Interactive from '../../../react-interactive-component/src/index';
import s from './app.style';

import LinkExample from './LinkExample';
import InputExample from './InputExample';
import StateLogExample from './StateLogExample';
import ConsoleLogExample from './ConsoleLogExample';
import ShowOnExample from './ShowOnExample';
import TabThroughPage from './TabThroughPage';
import StressTest from './StressTest';
import TouchActiveTapOnly from './TouchActiveTapOnly';

function App() {
  return (
    <div style={s.root}>
      <h1 style={s.title}>React Interactive</h1>
      <div style={s.repoLink}><Interactive
        as="a"
        href="https://github.com/rafrex/react-interactive"
        // use the spread operator to add state styles - equivalent to commented code below
        {...s.link}
        // normal={s.link.normal}
        // hover={s.link.hover}
        // active={s.link.active}
        // touchActive={s.link.touchActive}
        // style={s.link.style}
        touchActiveTapOnly
      >https://github.com/rafrex/react-interactive</Interactive></div>

      <LinkExample />
      <InputExample />
      <StateLogExample />
      <ShowOnExample />
      <TabThroughPage />
      <TouchActiveTapOnly />
      <ConsoleLogExample />
      <StressTest />

      <Interactive
        as="a"
        href="http://www.rafaelpedicini.com/"
        interactiveChild
        touchActiveTapOnly
        focus={{}}
        touchActive={{}}
        style={s.creditLine}
      >
        {'Code and concept by '}
        <span {...s.childLink}>
          Rafael Pedicini
        </span>
      </Interactive>
    </div>
  );
}

export default App;
