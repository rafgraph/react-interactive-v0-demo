import style from './style.section';
import { buttonStyle } from './stateLogExample.style';

const s = Object.create(style);

s.title = {
  ...s.title,
  marginBottom: '8px',
  display: 'inline-block',
};
s.info = {
  fontSize: '15px',
  color: 'rgb(128, 128, 128)',
  margin: '0 0 5px',
};
s.code = (content) => (
  Object.getPrototypeOf(s).code(content, {
    letterSpacing: 'normal',
  })
);

s.button = buttonStyle;

export default s;
