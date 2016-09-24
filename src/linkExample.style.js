export default {
  root: {
    margin: '10px 0',
  },
  title: { fontSize: '18px' },
  subTitle: {
    fontSize: '15px',
    color: 'rgb(128, 128, 128)',
    margin: '1px 0 5px',
  },
  link: {
    hover: { color: 'green' },
    hoverActive: { color: 'red' },
    touchActive: { color: 'blue' },
    keyActive: { color: 'orange' },
    style: { borderBottom: '1px dotted' },
    focus: {
      style: {
        outline: '2px solid rgb(0, 152, 0)',
        outlineOffset: '1px',
      },
      focusFromTabOnly: true,
    },
  },
  linkWrapper: { margin: '4px 0' },
  code: {
    fontFamily: 'monospace',
  },
};
