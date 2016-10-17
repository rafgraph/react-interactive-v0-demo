import style from '../styles/section.style';
import button from '../styles/button.style';

const s = Object.create(style);
s.button = Object.create(button);

s.title = {
  ...s.title,
  marginBottom: '11px',
};

s.focusFrom = {
  fontSize: '12px',
};

s.withFocus = {
  fontSize: '15px',
};

s.logStyle = {
  marginTop: '5px',
  paddingLeft: '5px',
  listStyle: 'none',
  border: '1px solid black',
  height: '200px',
  overflowY: 'scroll',
  WebkitOverflowScrolling: 'touch',
  WebkitScrollbar: 'width: 35px',
};

s.eventLogLine = {
  color: 'rgb(128, 128, 128)',
};

s.changeLogLine = (idx, length) => ({
  marginTop: idx === 0 ? '4px' : '8px',
  marginBottom: idx === length - 1 ? '4px' : '8px',
});

s.changeTitle = {
  fontSize: '14px',
  color: 'rgb(128, 128, 128)',
};

s.changeList = {
  listStyle: 'none',
};

s.changeItem = {
  margin: '-1px 3px',
};

s.changeStateLine = {
  fontSize: '14px',
};

s.codeWithSize = (content) => (
  Object.getPrototypeOf(s).code(content, {
    fontSize: '16px',
  })
);

s.toggleLogLink = {
  style: {
    fontSize: '14px',
    margin: '4px',
    display: 'inline-block',
    borderBottom: '1px dotted',
  },
  ...s.iStyles,
  normal: {
    color: 'gray',
  },
  focus: {
    focusFromOnly: 'tab',
    style: {
      ...s.button.focus,
      color: 'black',
    },
  },
};

export default s;
