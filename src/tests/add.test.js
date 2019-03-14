const add = (a,b) => a + b;
const genrateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
    const result = add(3,4);
    expect(result).toBe(7);
});

test('shoukld generate greeting form name', () => {
    const result = genrateGreeting('Mike');
    expect(result).toBe('Hello Mike!');
});

test('shoukld generate greeting for no name', () => {
    const result = genrateGreeting();
    expect(result).toBe('Hello Anonymous!');
});