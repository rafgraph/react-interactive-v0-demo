import style from '../styles/section.style';

const s = Object.create(style);

s.title = {
  ...s.title,
  marginBottom: '7px',
};
s.list = {
  listStyle: 'none',
  marginBottom: '10px',
};

s.listItem = {
  paddingLeft: '18px',
  textIndent: '-14px',
  margin: '0 0 5px',
};

s.interactiveChild = {
  style: {
    padding: '0 2px',
  },
  onParentNormal: {
    ...s.iStyles.normal,
  },
  onParentHover: {
    style: {
      ...s.iStyles.hover,
    },
    className: 'interactive-child-hover-class',
  },
  onParentHoverActive: {
    ...s.iStyles.hoverActive,
  },
  onParentTouchActive: {
    ...s.iStyles.touchActive,
  },
  onParentKeyActive: {
    ...s.iStyles.keyActive,
  },
  onParentFocusFromTab: {
    ...s.iStyles.focusFromTab,
    outlineOffset: '-1px',
  },
};

export default s;
