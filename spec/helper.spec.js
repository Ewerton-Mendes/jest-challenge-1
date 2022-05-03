const helper = require('../src/helper');

describe('Given helper is started', () => {
  describe('When sum method is called', () => {
    it('Then it returns the sum of two numbers', () => {
      expect(helper.sum(1, 2)).toBe(3);
    });
  });
  describe('When randomAbove3 method is called', () => {
    it('Then it returns a ramdom number greater than 2', () => {
      expect(helper.randomAbove3()).toBeGreaterThanOrEqual(3);
    });
  });
  describe('When returnTrue method is called', () => {
    it('Then it returns true', () => {
      expect(helper.returnTrue()).toBeTruthy();
    });
  });
  describe('When returnFalse method is called', () => {
    it('Then it returns false', () => {
      expect(helper.returnFalse()).toBeFalsy();
    });
  });
  describe('When returnUndefined method is called', () => {
    it('Then it returns undefined', () => {
      expect(helper.returnUndefined()).toBeUndefined();
    });
  });
  describe('When builder method is called', () => {
    it('Then it returns the built object', () => {
      expect(helper.builder()).toEqual({
        name: 'Joao',
        surname: 'Silva',
        birth: '01-01-1980',
      });
    });
  });
  describe('When merger method is called', () => {
    it('Then it returns the built object', () => {
      const newObj = {
        teste: 'blah',
      };
      expect(helper.merger(newObj)).toEqual(expect.objectContaining(newObj));
    });
  });
  describe('When concatRandomString method is called', () => {
    it('Then it returns concatenated string', () => {
      expect(helper.concatRandomString('blah')).toMatch(/blah\d+/);
    });
  });
  describe('When concatRandomArray method is called', () => {
    const array = ['blah', 'bleh', 'blih'];
    it('Then it returns concatenated array', () => {
      expect(helper.concatRandomArray(array)).toEqual(expect.arrayContaining(array));
    });
  });
  describe('When thrower method is called', () => {
    it('Then throw a new common Error', () => {
      expect(() => helper.thrower()).toThrow();
    });
  });
  describe('When thrower2 method is called', () => {
    it('Then throw a TypeError', () => {
      expect(() => helper.thrower2(new TypeError('Blah'))).toThrowError(new TypeError('Blah'));
    });
  });
});
