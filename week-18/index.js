const taskInput = document.querySelector(".task__input");
const parentElem = document.querySelector(".tasklist__state");
const buttonClear = document.querySelector(".button__item");
const spanTask = document.querySelector(".state");
let tasks = [];
buttonClear.disabled = true;
function createTask() {
	const taskDiv = document.createElement("div");
	taskDiv.setAttribute("class", "taskDiv");
	const newCheckbox = document.createElement("input");
	newCheckbox.type = "checkbox";
	newCheckbox.setAttribute("class", "checkbox");
	const newElement = document.createElement("li");
	newElement.setAttribute("class", "newElement");
	newElement.textContent = taskInput.value;

	if (taskInput.value === "") {
		alert("Введи задачу!");
	} else {
		parentElem.append(taskDiv);
		taskDiv.append(newElement);
		taskDiv.append(newCheckbox);
		buttonClear.disabled = false;
		tasks.push(newElement.textContent);
		window.localStorage.setItem("task", JSON.stringify(tasks));
		taskInput.value = "";
		spanTask.innerHTML = "";
	}
}
document.querySelector(".add__button").onclick = createTask;

function clearTask() {
	parentElem.innerHTML = "";
	spanTask.innerHTML = "Нет задач";
	buttonClear.disabled = true;
}
buttonClear.onclick = clearTask;
