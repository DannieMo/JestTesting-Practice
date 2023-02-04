const capitalize = (str) => {
  if (typeof str === 'string') {
    return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
  }
  return 'Please supply a string';
};

module.exports = capitalize;
