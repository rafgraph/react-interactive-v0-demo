import style from '../styles/section.style';

const s = Object.create(style);

s.subTitle = {
  ...s.subTitle,
  margin: '0 0 5px',
};

s.link = {
  ...s.iStyles,
  style: {
    ...s.link,
    textDecoration: 'underline',
    padding: '2px',
  },
  focus: {
    focusFromTabStyle: {
      ...s.iStyles.focus,
      outlineOffset: '-1px',
    },
  },
};

s.code = (content) => (
  Object.getPrototypeOf(s).code(content, {
    textDecoration: 'none',
  })
);

s.linkWrapper = { margin: '4px 0' };

export default s;
