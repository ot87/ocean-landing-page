export const getScreenPaddings = (styles = {}) => ({ spacing, breakpoints }) => ({
  ...styles,
  root: {
    paddingBottom: spacing(3),
    [breakpoints.down('xs')]: {
      paddingLeft: 0,
      paddingRight: 0,
      paddingBottom: spacing(1)
    }
  }
});
