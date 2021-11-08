const { validator } = require('../src/validator');

describe('validator', () => {
  const mockLinks = [
    { href: 'https://www.google.com/', text: 'test 1' },
    { href: 'https://www.google.com/a', text: 'test 2' },
  ];

  const mockFail = [
    { href: 'https://www.google.com/', text: 'test 1', ok: 'fail', status: 'Cannot be verified' },
    { href: 'https://www.google.com/a', text: 'test 2', ok: 'fail', status: 'Cannot be verified' },
  ];

  it('should return an array', async () => {
    expect(await validator(mockLinks)).toEqual(mockFail);
  });
});
