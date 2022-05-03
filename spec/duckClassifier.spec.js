const isDuck = require("../src/duckClassifier");

describe('Given duckClassifier is started', () => {
    describe('When isDuck method is called', () => {
        describe('And the animal has all the properties', () => {
            it('Then it is a duck', () => {
                expect(isDuck(true, true, true)).toBe(true);
            });
        });
        describe('And the animal does nothing', () => {
            it('Then it is not a duck', () => {
                expect(isDuck(false, false, false)).toBe(false);
            });
        });
        describe('And the animal does not fly', () => {
            it('Then it is not a duck', () => {
                expect(isDuck(false, true, true)).toBe(false);
            });
        });
        describe('And the animal does not walk', () => {
            it('Then it is not a duck', () => {
                expect(isDuck(true, false, true)).toBe(false);
            });
        });
        describe('And the animal does not swim', () => {
            it('Then it is not a duck', () => {
                expect(isDuck(true, true, false)).toBe(false);
            });
        });
    });
});