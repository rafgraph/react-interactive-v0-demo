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

s.infoSVG = {
  style: {
    left: 'calc(50% - 25px)',
    position: 'relative',
    width: '32px',
    height: '32px',
    fill: 'rgb(128, 128, 128)',
    paddingLeft: '1px',
    paddingBottom: '1px',
    marginLeft: '-1px',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
  },
  shownStyle: {
    fill: 'black',
  },
};

s.infoButton = {
  hover: s.infoSVG.shownStyle,
  hoverActive: s.infoSVG.shownStyle,
  touchActive: s.infoSVG.shownStyle,
  focus: {
    focusFromTabStyle: {
      ...s.infoSVG.shownStyle,
      outline: '2px solid rgb(128, 128, 128)',
      outlineOffset: '-5px',
    },
  },
};

export default s;
