import React from 'react';
import { Link } from 'react-router';
import Interactive from '../../react-interactive-component/src/index';
import style from './linkExample.style';

function LinkExample() {
  return (
    <div style={style.root}>
      <h2 style={style.title}>Links</h2>
      <div style={style.subTitle}>
        <div><code style={style.code}>hover</code> is green</div>
        <div><code style={style.code}>hoverActive</code> is red</div>
        <div><code style={style.code}>touchActive</code> is blue</div>
        <div><code style={style.code}>keyActive</code> is orange</div>
      </div>

      <div style={style.linkWrapper}>
        <Interactive
          as="a"
          href="#"
          // href="http://react-interactive.rafrex.com/"
          {...style.link}
        >Anchor tag link &ndash; <code style={style.code}>as="a" href="#"</code>
        </Interactive>
      </div>

      <div style={style.linkWrapper}>
        <Interactive
          as={Link}
          to="/"
          {...style.link}
        >React Router Link &ndash; <code style={style.code}>{'as={Link} to="/"'}</code>
        </Interactive>
      </div>
    </div>
  );
}

export default LinkExample;
