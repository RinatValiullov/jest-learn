/**
 * Check equality of two objects
 *
 * @returns {object}
 */

const createObject = (prop, value) => {
  const object = { [prop]: value };
  return object;
};

module.exports = createObject;
