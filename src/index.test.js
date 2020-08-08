const { generatelCase, generateUCase, generateNumber, generateSymbol} = require('./index.js');

test('generatelCase returns lower case string', ()=>{
	const lCase = generatelCase();
	expect(lCase).toEqual(lCase.toLowerCase());
	expect(typeof(lCase)).toBe('string');

});

test('generateUCase returns upper case string', ()=>{
	const uCase = generateUCase();
	expect(uCase).toEqual(uCase.toUpperCase());
	expect(typeof(uCase)).toBe('string');	
});

test('generateNumber returns number of type string', ()=>{
	const no = generateNumber();
	expect(typeof(parseInt(no,10))).toBe('number');
	expect(typeof(no)).toBe('string');

});

test('generateSymbol returns string', ()=>{
	const symbol = generateSymbol();
	expect(typeof(symbol)).toBe('string');
});