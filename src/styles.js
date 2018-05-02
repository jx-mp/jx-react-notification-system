// Used for calculations
var defaultWidth = 320;
var defaultColors = {
  success: '#5ea400',
  error: '#dc3545',
  warning: '#ebad1a',
  info: '#369cc7'
};

var defaultBoxShadow = 'rgba(0, 0, 0, 0.25) 0px 14px 45px, rgba(0, 0, 0, 0.22) 0px 10px 18px';

var defaultActionStyle = {
  background: '#ffffff',
  borderRadius: '2px',
  padding: '6px 20px',
  fontWeight: 'bold',
  margin: '10px 10px 0 0',
  border: 0
};

var defaultActionColor = '#ffffff';

var STYLES = {

  Wrapper: {},
  Containers: {
    DefaultStyle: {
      fontFamily: 'inherit',
      position: 'fixed',
      width: defaultWidth,
      padding: '0 10px 10px 10px',
      zIndex: 9998,
      WebkitBoxSizing: 'border-box',
      MozBoxSizing: 'border-box',
      boxSizing: 'border-box',
      height: 'auto'
    },

    tl: {
      top: '0px',
      bottom: 'auto',
      left: '0px',
      right: 'auto'
    },

    tr: {
      top: '0px',
      bottom: 'auto',
      left: 'auto',
      right: '0px'
    },

    tc: {
      top: '0px',
      bottom: 'auto',
      margin: '0 auto',
      left: '50%',
      marginLeft: -(defaultWidth / 2)
    },

    bl: {
      top: 'auto',
      bottom: '0px',
      left: '0px',
      right: 'auto'
    },

    br: {
      top: 'auto',
      bottom: '0px',
      left: 'auto',
      right: '0px'
    },

    bc: {
      top: 'auto',
      bottom: '0px',
      margin: '0 auto',
      left: '50%',
      marginLeft: -(defaultWidth / 2)
    }

  },

  NotificationItem: {
    DefaultStyle: {
      position: 'relative',
      width: '100%',
      cursor: 'pointer',
      borderRadius: '2px',
      fontSize: '13px',
      margin: '10px 0 0',
      padding: '10px',
      display: 'block',
      WebkitBoxSizing: 'border-box',
      MozBoxSizing: 'border-box',
      boxSizing: 'border-box',
      opacity: 0,
      transition: '0.3s ease-in-out',
      WebkitTransform: 'translate3d(0, 0, 0)',
      transform: 'translate3d(0, 0, 0)',
      willChange: 'transform, opacity',

      isHidden: {
        opacity: 0
      },

      isVisible: {
        opacity: 1
      }
    },

    success: {
      borderTop: '2px solid ' + defaultColors.success,
      backgroundColor: '#f0f5ea',
      color: '#4b583a',
      WebkitBoxShadow: defaultBoxShadow,
      MozBoxShadow: defaultBoxShadow,
      boxShadow: defaultBoxShadow
    },

    error: {
      borderTop: '2px solid ' + defaultColors.error,
      backgroundColor: '#f4e9e9',
      color: '#412f2f',
      WebkitBoxShadow: defaultBoxShadow,
      MozBoxShadow: defaultBoxShadow,
      boxShadow: defaultBoxShadow
    },

    warning: {
      borderTop: '2px solid ' + defaultColors.warning,
      backgroundColor: '#f9f6f0',
      color: '#5a5343',
      WebkitBoxShadow: defaultBoxShadow,
      MozBoxShadow: defaultBoxShadow,
      boxShadow: defaultBoxShadow
    },

    info: {
      borderTop: '2px solid ' + defaultColors.info,
      backgroundColor: '#e8f0f4',
      color: '#41555d',
      WebkitBoxShadow: defaultBoxShadow,
      MozBoxShadow: defaultBoxShadow,
      boxShadow: defaultBoxShadow
    }
  },

  Title: {
    DefaultStyle: {
      fontSize: '14px',
      margin: '0 0 5px 0',
      padding: 0,
      fontWeight: 'bold'
    },

    success: {
      color: defaultColors.success
    },

    error: {
      color: defaultColors.error
    },

    warning: {
      color: defaultColors.warning
    },

    info: {
      color: defaultColors.info
    }

  },

  MessageWrapper: {
    DefaultStyle: {
      margin: 0,
      padding: 0
    }
  },

  Dismiss: {
    DefaultStyle: {
      cursor: 'pointer',
      fontFamily: 'Arial',
      fontSize: '17px',
      position: 'absolute',
      top: '4px',
      right: '5px',
      lineHeight: '15px',
      backgroundColor: '#dededf',
      color: '#ffffff',
      borderRadius: '50%',
      width: '14px',
      height: '14px',
      fontWeight: 'bold',
      textAlign: 'center'
    },

    success: {
      color: '#f0f5ea',
      backgroundColor: '#b0ca92'
    },

    error: {
      color: '#f4e9e9',
      backgroundColor: '#e4bebe'
    },

    warning: {
      color: '#f9f6f0',
      backgroundColor: '#e1cfac'
    },

    info: {
      color: '#e8f0f4',
      backgroundColor: '#a4becb'
    }
  },

  Action: {
    DefaultStyle: defaultActionStyle,

    success: {
      backgroundColor: defaultColors.success,
      color: defaultActionColor
    },

    error: {
      backgroundColor: defaultColors.error,
      color: defaultActionColor
    },

    warning: {
      backgroundColor: defaultColors.warning,
      color: defaultActionColor
    },

    info: {
      backgroundColor: defaultColors.info,
      color: defaultActionColor
    }
  },

  ActionWrapper: {
    DefaultStyle: {
      margin: 0,
      padding: 0
    }
  }
};

module.exports = STYLES;
