import React from 'react';
import Interactive from 'react-interactive';
import s from '../styles/app.style';

import LinkExample from './LinkExample';
import InputExample from './InputExample';
import StateLogExample from './StateLogExample';
import ConsoleLogExample from './ConsoleLogExample';
import ShowOnExample from './ShowOnExample';
import TabThroughPage from './TabThroughPage';
import StressTest from './StressTest';
import TouchActiveTapOnly from './TouchActiveTapOnly';
import LongPressExample from './LongPressExample';
import InteractiveChild from './InteractiveChild';

function App() {
  return (
    <div style={s.root}>
      <h1 style={s.title}>React Interactive</h1>
      <div style={s.repoLink}>
        <Interactive
          as="a"
          href="https://github.com/rafgraph/react-interactive"
          // use the spread operator to add state styles - equivalent to commented code below
          {...s.link}
          // normal={s.link.normal}
          // hover={s.link.hover}
          // active={s.link.active}
          // touchActive={s.link.touchActive}
          // style={s.link.style}
          touchActiveTapOnly
        >
          https://github.com/rafgraph/react-interactive
        </Interactive>
      </div>

      <LinkExample />
      <InputExample />
      <StateLogExample />
      <ShowOnExample />
      <InteractiveChild />
      <TabThroughPage />
      <TouchActiveTapOnly />
      <LongPressExample />
      <ConsoleLogExample />
      <StressTest />

    </div>
  );
}

export default App;
