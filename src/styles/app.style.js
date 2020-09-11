import style from '../styles/style';

const s = Object.create(style);

s.root = {
  maxWidth: '340px',
  padding: '10px 15px 25px',
  margin: '0 auto',
  fontFamily: 'helvetica, sans-serif',
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
  focusFromTab: s.iStyles.focusFromTab,
};

s.repoLink = {
  margin: '-1px 1px 25px',
};

export default s;
