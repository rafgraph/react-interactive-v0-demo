import style from '../styles/section.style';
import button from '../styles/button.style';

const s = Object.create(style);
s.button = {
  style: { ...button.style, ...button.normal },
  longPress: {
    borderColor: style.iStyles.touchActive.color,
    color: style.iStyles.touchActive.color,
  },
};
s.title = {
  ...s.title,
  marginBottom: '7px',
};
s.list = {
  listStyle: 'none',
  marginBottom: '10px',
};

s.listItem = {
  paddingLeft: '18px',
  textIndent: '-14px',
  margin: '0 0 5px',
};

export default s;
