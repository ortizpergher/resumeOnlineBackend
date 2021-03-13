"use strict";module.exports = {
  up: async queryInterface => {
    queryInterface.createSchema('resume');
  },

  down: async queryInterface => {
    queryInterface.dropSchema('resume');
  },
};
