console.log("hello world");

let cuteCatMan = document.querySelector('img')
let howForm = document.querySelector('form')

function handleSubmit(evt) {
	evt.preventDefault();
	alert("The form has been submitted successfully.")
}

howForm.addEventListener("submit", () => {
	alert("The form has been submitted successfully.")
})

cuteCatMan.addEventListener("mouseover", () => {
	alert("I can tell by the way you present yourself that you put the cereal in before the milk.")
})

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);