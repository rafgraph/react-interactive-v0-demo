import style from './style';

const button = {
  style: {
    height: '40px',
    lineHeight: '38px',
    fontSize: '18px',
    textAlign: 'center',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
  },
  normal: {
    ...style.iStyles.normal,
    border: '1px solid',
    // have to explicitly add border color b/c browsers only
    // sometimes use the `color` property for the border color
    borderColor: style.iStyles.normal.color,
  },
  hover: {
    ...style.iStyles.hover,
    border: '1px solid',
    borderColor: style.iStyles.hover.color,
  },
  hoverActive: {
    ...style.iStyles.hoverActive,
    border: '1px solid',
    borderColor: style.iStyles.hoverActive.color,
  },
  touchActive: {
    ...style.iStyles.touchActive,
    border: '1px solid',
    borderColor: style.iStyles.touchActive.color,
  },
  keyActive: {
    ...style.iStyles.keyActive,
    border: '1px solid',
    borderColor: style.iStyles.keyActive.color,
  },
  focus: {
    outline: '3px solid lightblue',
    outlineOffset: '1px',
  },
};

export default button;
