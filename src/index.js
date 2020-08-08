// generate lowercase letters
exports.generatelCase = () =>{return String.fromCharCode(Math.floor(Math.random() * 26) + 97)};

// generate uppercase letters
exports.generateUCase = ()=>{return String.fromCharCode(Math.floor(Math.random() * 26) + 65)};

// generate numbers
exports.generateNumber = ()=>{return String.fromCharCode(Math.floor(Math.random() * 9) + 48)};

// generateSymbols
exports.generateSymbol = ()=>{
	const s = '!@#$%^&*(){}[]=<>/.,|'
	return s[Math.floor(Math.random() * s.length)]
};
