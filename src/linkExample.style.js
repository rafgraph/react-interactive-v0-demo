export default {
  root: {
    marginBottom: '15px',
  },
  title: {
    fontSize: '18px',
    marginBottom: '1px',
  },
  subTitle: {
    fontSize: '15px',
    color: 'rgb(128, 128, 128)',
    margin: '0 0 5px',
  },
  link: {
    hover: { color: 'green' },
    hoverActive: { color: 'red' },
    touchActive: { color: 'blue' },
    keyActive: { color: 'orange' },
    style: {
      borderBottom: '1px dotted',
      msTouchAction: 'manipulation',
      touchAction: 'manipulation',
    },
    focus: {
      style: {
        outline: '2px solid rgb(0, 152, 0)',
        outlineOffset: '1px',
      },
      focusFromOnly: 'tab',
    },
  },
  linkWrapper: { margin: '4px 0' },
  code: {
    fontFamily: 'monospace',
  },
};
