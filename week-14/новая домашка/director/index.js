const directors = 
[
    {
    name: 'Стивен Спилберг',
    career: 'Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр',
    films: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0',
    top_rated_film: 'Список Шиндлера'
    },
    {
    name: 'Кристофер Нолан',
    career: 'Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор',
    films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
    top_rated_film: 'Начало'
    },
    {
    name: 'Мартин МакДона',
    career: 'Сценарист, Режиссёр, Продюсер',
    films: 'https://www.film.ru/person/martin-makdonah',
    top_rated_film: 'Три билборда на границе Эббинга, Миссури'
    },
    {
    name: 'Алексей Балабанов',
    career: 'Режиссёр, Сценарист, Актёр, Продюсер',
    films: 'https://www.film.ru/person/aleksey-balabanov',
    top_rated_film: 'Брат'
    },
    {
    name: 'Питер Фаррелли',
    career: 'Продюсер, Режиссёр, Сценарист, Актёр',
    films: 'https://www.film.ru/person/piter-farrelli',
    top_rated_film: 'Зелёная книга'
    },
    {
    name: 'Юрий Быков',
    career: 'Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер',
    films: 'https://www.film.ru/person/yuriy-bykov',
    top_rated_film: 'Дурак'
    },
    {
    name: 'Жан-Марк Валле',
    career: 'Режиссер, Продюсер, Монтажёр, Актёр, Сценарист',
    films: 'https://www.film.ru/person/zhan-mark-valle',
    top_rated_film: 'Далласский клуб покупателей'
    },
];

const mainElem = document.querySelector('.directors');

for (let i = 0; i < 7; i++){
    const dirBlock = document.createElement('div');
    dirBlock.classList.add('class', 'dirBlock');
    mainElem.append(dirBlock);

    const dirName = document.createElement('div');
    dirName.classList.add('class', 'dirName');
    dirName.textContent = directors[i]?.name;
    dirBlock.append(dirName);

    const dirInfo = document.createElement('div');
    dirInfo.classList.add('class', 'dirInfo')
    dirBlock.append(dirInfo);

    const dirRole = document.createElement('div');
    dirRole.textContent = directors[i]?.career;
    dirRole.classList.add('class', 'dirRole');
    dirInfo.append(dirRole);

    const dirLink = document.createElement('a');
    dirLink.classList.add('class', 'dirLink');
    dirLink.textContent = "Фильмография";
    dirLink.setAttribute('href', 'directors[i].films');
    dirInfo.append(dirLink);
}

const topFilmsList = directors.map(function(film){
    return film.top_rated_film;
});
const textTitle = document.createElement('div');
textTitle.classList.add('class', 'textTitle');
textTitle.textContent = "Лучшие фильмы этих режиссёров";
mainElem.append(textTitle);

const filmList = document.createElement('div');
filmList.classList.add('class', 'filmList');
filmList.textContent = topFilmsList.join('; ');
mainElem.append(filmList);


