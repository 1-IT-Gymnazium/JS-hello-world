const hello = require('./hello') //import testovaného modulu

test('adds 1 + 2 to equal 3', () => {
    expect(hello()).toBe("Hello world!")
})