const container = document.querySelector(".superheroes");
const dataPeview = localStorage.getItem("data");

if (dataPeview === null) {
	//если local storage пуст, то отправляются данные из data
	const data = [
		{
			rating: 0,
			id: "8",
			name: "Черная вдова",
			universe: "Marvel Comics",
			alterego: "Наташа Романофф",
			occupation: "супергероиня, шпионка",
			friends: "Мстители",
			superpowers:
				"пик человеческого физического потенциала, замедленное старение, знание многих языков",
			url: "https://n1s1.hsmedia.ru/e0/2b/55/e02b55b147eeaff9b3fe6bdbb36ff9ea/547x397_0xac120002_744074131540468872.jpg",
			info: "Супергероиня российского происхождения, родилась предположительно в 1928 году в Сталинграде. Во время Второй мировой войны",
		},
		{
			rating: 0,
			id: "9",
			name: "Дэдпул",
			universe: "Marvel Comics",
			alterego: "Уэйд Уинстон Уилсон",
			occupation: "антигерой, наёмник",
			friends: "частично Мстители, Человек-паук, Росомаха",
			superpowers:
				"высокий болевой порог, регенерация и бессмертие, сверхчеловеческая иммунная система",
			url: "https://n1s1.hsmedia.ru/34/93/39/3493392c94fc2ae0552ef9c7e87f2617/728x382_1_cc2a743fd686b7b2e256c062966bb465@1034x543_0xac120002_2692921231540468872.jpg",
			info: "Как и Росомаха из Людей Икс, Дэдпул был подвергнут опытам по программе «Оружие Икс». Ученые попытались исцелить его рак, привив его клеткам способность к регенерации.",
		},
	];
	localStorage.setItem("data", JSON.stringify(data));
}

// При завершении загрузки документа вызывается функция renderData
document.addEventListener("DOMContentLoaded", renderData);

// Получение данных из localStorage в виде строки
function getDataString() {
	return localStorage.getItem("data");
}

// Парсинг данных из localStorage и возврат их в виде массива объектов
function getParsedData() {
	const dataString = getDataString();
	if (dataString) {
		return JSON.parse(dataString);
	}
	return [];
}

// Отображение данных на странице
function renderData() {
	const data = getParsedData();
	if (data && data.length) {
		container.innerHTML = ""; // Очищаем контейнер
		data.forEach((element) => createCard(element)); // Создаем карточку для каждого объекта из массива
	}
}

// Создание карточки с данными персонажа
function createCard({
	name,
	universe,
	alterego,
	occupation,
	friends,
	id,
	rating,
	superpowers,
	url,
}) {
	const div = document.createElement("div");
	div.classList.add("elem");
	const template = `
        <div class="container__wrapper">
            <h1>${name}</h1>
            <p><strong>Вселенная:</strong> ${universe}</p>
            <p><strong>Альтер эго:</strong> ${alterego}</p>
            <p><strong>Род деятельности:</strong> ${occupation}</p>
            <p><strong>Друзья:</strong> ${friends}</p>
            <p><strong>Суперсилы:</strong> ${superpowers}</p>
            <img src="${url}" alt="${name}">
            <div class="stars" data-id="${id}">
                <span data-value="1" class="${
									rating >= 1 ? "active" : ""
								}">☆</span>
                <span data-value="2" class="${
									rating >= 2 ? "active" : ""
								}">☆</span>
                <span data-value="3" class="${
									rating >= 3 ? "active" : ""
								}">☆</span>
                <span data-value="4" class="${
									rating >= 4 ? "active" : ""
								}">☆</span>
                <span data-value="5" class="${
									rating >= 5 ? "active" : ""
								}">☆</span>
            </div>
        </div>
    `;
	div.innerHTML = template;
	container.appendChild(div); // Добавляем карточку в контейнер на странице
}

// Обработчик событий для изменения рейтинга персонажа
container.addEventListener("click", function (event) {
	if (event.target.closest(".stars")) {
		// Проверяем, что клик был по звездам рейтинга
		const star = event.target;
		const starsContainer = event.target.closest(".stars");
		const id = starsContainer.getAttribute("data-id");
		const value = parseInt(star.getAttribute("data-value"));

		if (!isNaN(value)) {
			// Обновляем данные в localStorage с новым рейтингом
			const newData = getParsedData().map((element) => {
				if (element.id === id) {
					element.rating = value;
					return element;
				}
				return element;
			});
			localStorage.setItem("data", JSON.stringify(newData));

			// Обновляем отображение звезд в текущей карточке на странице
			for (let i = 0; i < starsContainer.children.length; i++) {
				if (i < value) {
					starsContainer.children[i].classList.add("active");
				} else {
					starsContainer.children[i].classList.remove("active");
				}
			}
		}
	}
});
