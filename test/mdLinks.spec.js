const { mdLinks } = require('../src/mdLinks');

describe('mdLinks', () => {
  it('should return an array', async () => {
    const result = await mdLinks('./test/');
    expect(result).toEqual(expect.any(Array));
  });

  it('should throw an error', async () => {
    const message = 'There are not any markdown files in the provided directory and subdirectories';
    await expect(mdLinks('./src/')).rejects.toThrow(message);
  });

  it('should call validator', async () => {
    const result = await mdLinks('./test/', { validate: true });
    expect(result[0]).toHaveProperty('ok');
  });
});
