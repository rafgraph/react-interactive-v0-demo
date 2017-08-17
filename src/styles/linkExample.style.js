import style from '../styles/section.style';

const s = Object.create(style);

s.subTitle = {
  ...s.subTitle,
  margin: '0 0 5px',
};

s.link = {
  ...s.iStyles,
  style: {
    textDecoration: 'underline',
    padding: '3px 4px 2px',
    border: '1px solid transparent',
  },
  focusFromTab: {
    border: '1px solid black',
    borderRadius: '3px',
    textDecoration: 'none',
    backgroundColor: 'rgba(255, 153, 0, 0.2)',
  },
};

s.code = content =>
  Object.getPrototypeOf(s).code(content, {
    textDecoration: 'none',
  });

s.linkWrapper = { margin: '6px 0 0 -2px' };

export default s;
