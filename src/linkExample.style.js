import style from './style.section';

const s = Object.create(style);

s.title = {
  ...s.title,
  marginBottom: '1px',
};

s.subTitle = {
  ...s.subTitle,
  margin: '0 0 5px',
};

s.link = {
  ...s.iStyles,
  style: {
    ...s.link,
    borderBottom: '1px dotted',
  },
  focus: {
    style: {
      ...s.iStyles.focus,
    },
    focusFromOnly: 'tab',
  },
};

s.linkWrapper = { margin: '4px 0' };

export default s;
