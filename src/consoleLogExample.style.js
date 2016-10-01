import style from './style.section';
import button from './style.button';

const s = Object.create(style);

s.title = {
  ...s.title,
  marginBottom: '8px',
  display: 'inline-block',
};
s.info = {
  fontSize: '15px',
  color: 'rgb(128, 128, 128)',
};
s.code = (content) => (
  Object.getPrototypeOf(s).code(content, {
    letterSpacing: 'normal',
  })
);

s.button = button;

export default s;
