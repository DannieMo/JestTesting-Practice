// eslint-disable-next-line consistent-return
const stringLength = (str) => {
  try {
    if (str.length > 0 && str.length < 10) {
      return str.length;
    }
  } catch (error) {
    return error;
  }
};

module.exports = stringLength;
