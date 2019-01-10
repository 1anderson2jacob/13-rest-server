'use strict';

let schema = require('../models/schema.js');
let sanitize = require('../models/sanitize.js');

describe('helper modules', () => {

  describe('schema', () => {
    it('', () => {

    });

  });
  describe('sanitize', () => {
    it('should sanitize and return the name of the person object', () => {
      let person = {
        name: 'lowell',
        id: 9,
      };
      let result = sanitize(person).name;
      expect(result).toBe('lowell');
    });

  });
});