export default {
  root: {
    maxWidth: '400px',
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
  },
  title: {
    fontSize: '24px',
  },
  link: {
    style: {
      fontSize: '14px',
      msTouchAction: 'manipulation',
      touchAction: 'manipulation',
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
        outline: '3px solid yellow',
        outlineOffset: '1px',
      },
      focusFromTabOnly: true,
    },
  },
  repoLink: {
    margin: '-1px 1px 15px',
  },
  creditLine: {
    fontSize: '14px',
    color: 'rgb(128, 128, 128)',
    margin: '20px 0 0 1px',
  },
};
