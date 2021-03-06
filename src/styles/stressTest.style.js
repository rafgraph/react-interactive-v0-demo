import style from '../styles/section.style';

const s = Object.create(style);

s.title = {
  ...s.title,
  marginBottom: '4px',
  display: 'inline-block',
};

s.create500Items = {
  style: {
    fontSize: '15px',
    textDecoration: 'underline',
  },
  ...s.iStyles,
  normal: {
    color: 'rgb(128, 128,128)',
  },
};

s.item = {
  style: {
    marginLeft: '1px',
    cursor: 'pointer',
  },
  ...s.iStyles,
};

s.showOnFocus = {
  color: 'rgb(128, 128, 128)',
  fontSize: '12px',
  marginLeft: '2px',
};

s.loading = {
  color: 'rgb(128, 128, 128)',
  fontSize: '15px',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
};

export default s;
