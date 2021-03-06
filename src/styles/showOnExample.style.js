import style from '../styles/section.style';

const s = Object.create(style);

s.root = {
  ...s.root,
  marginBottom: '15px',
};

s.infoBox = {
  height: '20px',
  textAlign: 'center',
  marginBottom: '7px',
};

s.subTitle = {
  ...s.subTitle,
  fontSize: '14px',
};

s.infoText = {
  fontSize: '15px',
};

s.infoButton = {
  style: {
    left: 'calc(50% - 25px)',
    position: 'relative',
    fill: 'rgb(128, 128, 128)',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
  },
  hover: { fill: 'black' },
  hoverActive: 'hover',
  touchActive: 'hover',
  focusFromTab: 'hover',
};

s.svg = {
  width: '32px',
  height: '32px',
};

export default s;
