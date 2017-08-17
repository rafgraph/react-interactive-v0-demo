import React from 'react';
import s from '../styles/tabThroughPage.style';

function TabThroughPage() {
  const tb12 = Math.floor(Math.random() * 199) + 1 === 199;

  return (
    <div style={s.root}>
      <h2 style={s.title}>Tab the Page</h2>
      <div>
        <ul style={s.list}>
          <li style={s.listItem}>
            &ndash; {s.code('tab', tb12)} through the page to test out the
            keyboard functionality.
          </li>
          <li style={s.listItem}>
            &ndash; When an element has focus, the {s.code('enter', tb12)} key
            will trigger the {s.code('onClick', tb12)} handler.
          </li>
          <li style={s.listItem}>
            &ndash; Chrome, Edge, and Firefox&#39;s default settings will{' '}
            {s.code('tab', tb12)} through everything, in Safari the default is{' '}
            {s.code('option-tab', tb12)}.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TabThroughPage;
