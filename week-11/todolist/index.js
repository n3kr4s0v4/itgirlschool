const parentElem = document.querySelector('.todolist');
function createTask() {
    const addList = document.querySelector (".container__input");
	newElement = document.createElement('li');
    newElement.setAttribute("class", "additem");
	newElement.textContent = addList.value;

	if (addList.value === "") {
		alert ('Введи задачу!');
	}
	else {
		parentElem.append(newElement);
		addList.value = "";
	}
}

document.querySelector('.container__button').onclick = createTask;

parentElem.addEventListener('click', function(evt){
	if (evt.target.tagName === 'LI') {
		evt.target.classList.toggle('itemcheck');
	}
});
