import style from './style.section';

const s = Object.create(style);

s.title = {
  ...s.title,
  marginBottom: '0px',
};

s.infoBox = {
  height: '20px',
  textAlign: 'center',
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
  hoverActive: { fill: 'black' },
  touchActive: { fill: 'black' },
  focus: {
    focusFromTabStyle: { fill: 'black' },
  },
};

s.svg = {
  width: '32px',
  height: '32px',
};

export default s;
