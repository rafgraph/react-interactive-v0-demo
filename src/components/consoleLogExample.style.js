import style from '../styles/section.style';
import button from '../styles/button.style';

const s = Object.create(style);
s.button = Object.create(button);

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


export default s;
