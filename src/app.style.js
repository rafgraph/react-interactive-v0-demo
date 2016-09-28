import style from './style.jsx';

const s = Object.create(style);

s.root = {
  maxWidth: '340px',
  padding: '10px 15px 25px',
  margin: '0 auto',
  fontFamily: 'helvetica neue, helvetica, sans-serif',
  fontWeight: '300',
  fontSize: '16px',
  letterSpacing: '0.025em',
  WebkitTextSizeAdjust: 'none',
  MozTextSizeAdjust: 'none',
  msTextSizeAdjust: 'none',
  textSizeAdjust: 'none',
};

s.title = {
  fontSize: '24px',
};

s.link = {
  style: {
    ...s.link, // same as ...Object.getPrototypeOf(s).link,
    fontSize: '14px',
  },
  normal: {
    borderBottom: '1px dotted rgb(0, 168, 0)',
    color: 'rgb(128, 128, 128)',
  },
  hover: {
    borderBottom: '1px solid rgb(0, 168, 0)',
    color: 'black',
  },
  active: 'hover',
  touchActive: {
    borderBottom: '1px dashed rgb(0, 168, 0)',
    color: 'black',
  },
  focus: {
    style: {
      ...s.iStyles.focus,
    },
    focusFromOnly: 'tab',
  },
};

s.repoLink = {
  margin: '-1px 1px 15px',
};

s.creditLine = {
  fontSize: '14px',
  color: 'rgb(128, 128, 128)',
  margin: '20px 0 0 1px',
};

export default s;
