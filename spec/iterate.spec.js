describe('Given concat method', () => {
  describe('When it is called', () => {
    const tests = [
      { expect: [].concat(['first', 'second']).concat(['last']), result: ['first', 'second', 'last'] },
      { expect: [].concat([1, 2]).concat([3]), result: [1, 2, 3] },
      { expect: [].concat(['one', 'two']).concat(['three']), result: ['one', 'two', 'three'] },
      { expect: [].concat([2, 3]).concat([5]), result: [2, 3, 5] },
      { expect: [].concat([1, 1]).concat([2]), result: [1, 1, 2] },
    ];
    it('Then should concat the', () => {
        tests.forEach(test => {
            expect(test.expect).toEqual(test.result);
        });
    });
  });
});
