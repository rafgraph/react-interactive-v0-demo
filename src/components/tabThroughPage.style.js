import style from '../styles/section.style';

const s = Object.create(style);

s.title = {
  ...s.title,
  marginBottom: '7px',
};

s.list = {
  listStyle: 'none',
};

s.listItem = {
  paddingLeft: '18px',
  textIndent: '-14px',
  margin: '0 0 5px',
};

s.code = (contents, tb12) => (
  Object.getPrototypeOf(s).code(
    tb12 ? 'Tom Brady' : contents,
    tb12 && { color: 'lightblue' }
  )
);

export default s;
