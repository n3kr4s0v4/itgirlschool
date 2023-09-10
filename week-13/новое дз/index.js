const buttonClick = document.querySelector('.day__button');
const dayInput = document.querySelector('.day');
const textDays = document.querySelector('.day__text');

function countDays () {
    let dayDeclain;
    const days = new Date(dayInput.value);
    const today = new Date();
    const daysTimestamp = +days;
    const todayTimestamp = +today;
    let diffDays = Math.abs(Math.floor((todayTimestamp - daysTimestamp) / (1000 * 60 * 60 *24)));
    const lastNum = diffDays % 10;
    const lastTwoNums = diffDays % 100;
    const currentDay = days.getDate();
    const currentMonth = days.getMonth();
    const currentYear = days.getFullYear();
    const todayDay = today.getDate();
    const todayMonth = today.getMonth();
    const todayYear = today.getFullYear();

    if (lastNum === 1 && lastTwoNums !== 11) {
        dayDeclain = " день";
    }
    else if (lastNum >= 2 && lastNum <= 4 && (lastTwoNums < 12 || lastTwoNums > 14)) {
        dayDeclain = " дня";
    }
    else {
        dayDeclain = " дней";
    }

    if (dayInput.value === "") {
        textDays.textContent = "Пожалуйста, введите дату рождения";
    }
    else if(currentDay === todayDay && currentMonth === todayMonth && currentYear === todayYear) {
        textDays.textContent = "С днём рождения!";
    }
    else if (days < today) {
        textDays.textContent = `День рождения был ${diffDays} ${dayDeclain} назад`;
    }
    else if(days > today) {
        textDays.textContent =`До дня рождения ${diffDays} ${dayDeclain}`;
    }
    else {
        textDays.textContent = "";
    }
}



buttonClick.addEventListener('click', countDays);