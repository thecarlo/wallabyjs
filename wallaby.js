/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
module.exports = function (wallaby) {
  console.log(wallaby);

  return {
    files: ['src/**/*.ts'],

    tests: ['src/**/*.spec.ts'],

    setup: function () {
      console.log(window.$);
      // etc.
    },

    env: {
      type: 'node',
    },

    trace: true,
  };
};
