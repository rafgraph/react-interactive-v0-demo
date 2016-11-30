import React from 'react';
import Interactive from 'react-interactive';
import s from './interactiveChild.style';

function InteractiveChild() {
  return (
    <Interactive
      as="div"
      style={s.root}
      interactiveChild
      focusFromTab={{}}
      touchActive={{}}
    >
      <h2 style={s.title}>Interactive <span {...s.interactiveChild}>Child</span></h2>
      <ul style={s.list}>
        <li style={s.listItem}>
          &ndash; Easily style <span {...s.interactiveChild}>children</span>{' '}
          based on the state of the <span {...s.interactiveChild}>Interactive parent.</span>
        </li>
        <Interactive
          as="li"
          style={s.listItem}
          interactiveChild
          focusFromTab={{}}
          touchActive={{}}
        >
          &ndash; You can also nest Interactive components and the{' '}
          <span {...s.interactiveChild}>children</span> are styled based on the state of their{' '}
          <span {...s.interactiveChild}>closest Interactive parent.</span>
        </Interactive>
      </ul>
    </Interactive>
  );
}

export default InteractiveChild;
