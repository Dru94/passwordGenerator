import { pass } from './password.js';

const genBtn = document.getElementById("genBtn");
const pDisplay = document.getElementById("pDisplay");

let slider = document.getElementById("myRange");
let output = document.getElementById("show");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

genBtn.addEventListener('click', ()=>{
	pDisplay.innerHTML=pass(slider.value)
});
