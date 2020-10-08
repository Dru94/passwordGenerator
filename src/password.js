

function getRandomUpperCase(){
	return String.fromCharCode(Math.floor(Math.random()*26)+65);
}

function getRandomLowerCase(){
	return String.fromCharCode(Math.floor(Math.random()*26)+97);
}

function getRandomNumber(){
	return String.fromCharCode(Math.floor(Math.random()*10)+48);
}

function getRandomSymbol(){
	let symbol = "!@#$%^&*(){}[]=<>/,.|~?";
	return symbol[Math.floor(Math.random()*symbol.length)]
}

function generate(){

	return getRandomSymbol() + getRandomNumber() + getRandomLowerCase() + getRandomUpperCase();
}

function pass(x){
	let c=[]
	for(let i=0; i < x; i++){
		c.push(generate());
	}
	
	let k = c.join('').slice(0,x);
	return k;
}
export { pass };