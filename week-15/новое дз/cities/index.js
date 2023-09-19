let cities = ["Москва", "Краснодар", "Санкт-Петербург", "Рыбинск", "Казань"];
let temperature = [];
let trueInput = false;
for (let city of cities) {
	let temperatureUser = prompt("Введите температуру для города " + city, "");
	if (temperatureUser == "") {
		alert("Введите число!");
		temperatureUser = prompt("Введите температуру для города " + city, "");
		const list = document.querySelector(".list");
		const citiesBlock = document.createElement("div");
		citiesBlock.textContent =
			"Температура в городе " + city + ": " + temperatureUser + " ℃";
		list.append(citiesBlock);
	} else if (isNaN(temperatureUser)) {
		alert("Введено неверное значение!");
		temperatureUser = prompt("Введите температуру для города " + city, "");
		const list = document.querySelector(".list");
		const citiesBlock = document.createElement("div");
		citiesBlock.textContent =
			"Температура в городе " + city + ": " + temperatureUser + " ℃";
		list.append(citiesBlock);
	} else {
		temperature.push(temperatureUser);
		const list = document.querySelector(".list");
		const citiesBlock = document.createElement("div");
		citiesBlock.textContent =
			"Температура в городе " + city + ": " + temperatureUser + " ℃";
		list.append(citiesBlock);
	}
}

const maxTemperature = Math.max(...temperature);
const minTemperature = Math.min(...temperature);
console.log(minTemperature);
const maxBlock = document.createElement("p");
maxBlock.textContent = "Максимальная температура: " + maxTemperature + " ℃";
document.body.append(maxBlock);

const minBlock = document.createElement("p");
minBlock.textContent = "Минимальная температура: " + minTemperature + " ℃";
document.body.append(minBlock);
