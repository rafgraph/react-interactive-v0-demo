import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Interactive from 'react-interactive';
import s from '../styles/linkExample.style';

function LinkExample() {
  return (
    <div style={s.root}>
      <h2 style={s.title}>Links</h2>
      <div style={s.subTitle}>
        <div>
          {s.code('hover')} is green
        </div>
        <div>
          {s.code('hoverActive')} is red
        </div>
        <div>
          {s.code('touchActive')} is blue
        </div>
        <div>
          {s.code('keyActive')} is orange
        </div>
      </div>

      <div style={s.linkWrapper}>
        <Interactive
          as="a"
          href="#"
          // href="https://react-interactive.rafgraph.dev/"
          {...s.link}
          touchActiveTapOnly
        >
          Anchor tag link &ndash; {s.code('as="a" href="#"')}
        </Interactive>
      </div>

      <div style={s.linkWrapper}>
        <BrowserRouter>
          <Interactive
            as={Link}
            to="/"
            {...s.link}
            touchActiveTapOnly
            // below just to test wrapper props, has no affect on layout
            wrapperClassName="LinkExmaple-wrapperClassName"
            wrapperStyle={{ display: 'inline' }}
          >
            React Router Link &ndash; {s.code('as={Link} to="/"')}
          </Interactive>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default LinkExample;
