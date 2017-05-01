import React from 'react';

export default {
  iStyles: {
    normal: { color: 'black' },
    hover: { color: 'green' },
    hoverActive: { color: 'red' },
    touchActive: { color: 'blue' },
    keyActive: { color: 'orange' },
    focusFromTab: {
      outline: '2px solid rgb(0, 152, 0)',
      outlineOffset: '2px',
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
