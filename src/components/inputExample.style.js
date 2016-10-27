import style from '../styles/section.style';

const s = Object.create(style);

s.title = {
  ...s.title,
  marginBottom: '8px',
};

s.input = {
  style: {
    backgroundColor: 'white',
    marginLeft: '-2px',
    WebkitAppearance: 'none',
    width: '155px',
    borderRadius: '0',
    padding: '2px',
    fontSize: '16px',
    border: '1px solid rgb(192,192,192)',
  },
  hover: { border: '1px solid rgb(0, 152, 0)' },
  active: 'hover',
  touchActive: { border: '1px solid blue' },
  focus: {
    style: {
      outline: '2px solid rgb(0, 152, 0)',
      outlineOffset: '-1px',
    },
    focusFromTouchStyle: {
      outline: '2px solid blue',
      outlineOffset: '-1px',
    },
  },
};

s.focusInstructions = {
  fontSize: '14px',
  color: 'gray',
  marginLeft: '8px',
};

export default s;
