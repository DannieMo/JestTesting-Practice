// const sentence = 'cash is scarce in Nigeria';

const stringLength = (str) => {
  try {
    if (str.length > 0 && str.length < 10) {
      return str.length;
    }
    // if (str.length < 10) {
    //   return str.length;
    // }
  } catch (error) {
    return error;
  }
  return;
};

// console.log(stringLength(sentence));

module.exports = stringLength;
