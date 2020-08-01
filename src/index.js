const charAmountRange = document.getElementById('characterAmountRange')
const charAmountNumber = document.getElementById('characterAmountNumber')
const form = document.getElementById('passwordGeneratorForm')
const display = document.getElementById('passwordDisplay')
const passLength = charAmountNumber.value
	

// syncing charAmountRange input value with charAmountNumber input value
charAmountNumber.addEventListener('input', synccharAmount)
charAmountRange.addEventListener('input', synccharAmount)

function synccharAmount(e){
	const value = e.target.value

	charAmountNumber.value = value
	characterAmountRange.value = value 

}

// listener for submit event 
form.addEventListener('submit', e =>{
	e.preventDefault();

	display.innerText = generatePassword(passLength);

})

// generate password
function generatePassword(p){
	let word = '';

	for(i = word.length; i<p; i++){

		word += generateSymbol();
		word += generatelCase();
		word += generateNumber();
		word += generateUCase();
	}

	return word.substring(0, passLength);

}

// generate lowercase letters
const generatelCase = () =>{return String.fromCharCode(Math.floor(Math.random() * 26) + 97)};

// generate uppercase letters
function generateUCase(){
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
// generate numbers
function generateNumber(){
	return String.fromCharCode(Math.floor(Math.random() * 9) + 48)
}
// generateSymbols
function generateSymbol(){
	const s = '!@#$%^&*(){}[]=<>/.,|'
	return s[Math.floor(Math.random() * s.length)]
}
