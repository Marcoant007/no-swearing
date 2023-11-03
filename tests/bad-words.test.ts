import checkProfanity from "../checkProfanity";

describe('checkProfanity', () => {
  test('returns null for text without profanity', () => {
    expect(checkProfanity('Hello, world!')).toBeNull();
  });

  test('returns the profane word if text contains profanity', () => {
    expect(checkProfanity('Hello, porra!')).toBe('porra');
  });

  test('returns the profane word if text contains profanity', () => {
    expect(checkProfanity('Hello, caralho!')).toBe('caralho');
  });

  test('returns the profane word if text contains profanity', () => {
    expect(checkProfanity('Hello, seu otário!')).toBe('otário');
  });

  test('returns the profane word if text contains profanity', () => {
    expect(checkProfanity('Hello, seu cabaço!')).toBe('cabaço');
  });
});