var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll('li');
var spinach = document.querySelectorAll('li')[2];
var button5 = document.getElementById('num5');

function erase(){
	return ul.removeChild(li[4]);
}

function underline(){
  return spinach.classList.toggle('done');
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var butt =document.createElement('button');
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	butt.appendChild(document.createTextNode(butt.value = 'Delete'));
	li.appendChild(butt);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

spinach.addEventListener('click',underline);

button5.addEventListener('click',erase)