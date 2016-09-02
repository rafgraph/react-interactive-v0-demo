import React from 'react';
import { Link } from 'react-router';
import Interactive from '../../react-interactive-component/src/index';
import style from './linkExample.style';

function LinkExample() {
  return (
    <div style={style.root}>
      <h2 style={style.title}>Links</h2>
      <div style={style.subTitle}>
        <code style={style.code}>hover</code> is green, <code style={style.code}>active</code> is
        red, <code style={style.code}>touchActive</code> is blue
      </div>
      <div><Interactive
        as="a"
        href="http://react-interactive.rafrex.com/"
        {...style.link}
      ><code style={style.code}>as="a"</code> anchor tag link to this site</Interactive></div>
      <div><Interactive
        as={Link}
        to="/"
        {...style.link}
      ><code style={style.code}>{'as={Link}'}</code> React Router Link
        component <code style={style.code}>to="/"</code>
      </Interactive></div>
    </div>
  );
}

export default LinkExample;
