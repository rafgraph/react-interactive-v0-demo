import React from 'react';

export default {
  link: {
    msTouchAction: 'manipulation',
    touchAction: 'manipulation',
  },
  iStyles: {
    normal: { color: 'black' },
    hover: { color: 'green' },
    hoverActive: { color: 'red' },
    touchActive: { color: 'blue' },
    keyActive: { color: 'orange' },
    focus: {
      outline: '2px solid rgb(0, 152, 0)',
      outlineOffset: '1px',
    },
  },
  code: (content, style) => (
    <code
      style={{
        fontFamily: 'monospace',
        ...style,
      }}
    >{content}</code>
  ),
};
