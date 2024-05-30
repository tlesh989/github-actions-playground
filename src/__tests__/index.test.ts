describe('Success!', () => {
  it('should print "Success!"', () => {
    const consoleLogSpy = jest.spyOn(console, 'log');
    require('../index'); // This will execute the code in index.ts
    expect(consoleLogSpy).toHaveBeenCalledWith('Success!');
    consoleLogSpy.mockRestore();
  });
});