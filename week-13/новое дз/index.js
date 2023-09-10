const buttonClick = document.querySelector('.day__button');
const dayInput = document.querySelector('.day');
const textDays = document.querySelector('.day__text');

function countDays () {
    let dayDeclain;
    let futureYear;
    const days = new Date(dayInput.value);
    const today = new Date();
    const daysTimestamp = +days;
    const todayTimestamp = +today;
    const diffDays = Math.abs(Math.floor((todayTimestamp - daysTimestamp) / (1000 * 60 * 60 *24)));
    const lastNum = diffDays % 10;
    const lastTwoNums = diffDays % 100;
    const currentDay = days.getDate();
    const currentMonth = days.getMonth();
    const currentYear = days.getFullYear();
    const todayDay = today.getDate();
    const todayMonth = today.getMonth();
    const todayYear = today.getFullYear();
    futureYear = +(today.setFullYear(today.getFullYear() + 1));
    const futureDate = Math.abs(Math.floor((futureYear - daysTimestamp) / (1000 * 60 * 60 *24)));
    const secondLastNum = futureDate % 10;
    const secondlastTwoNums = futureDate % 100;


    if (lastNum === 1 && lastTwoNums !== 11) {
        dayDeclain = " день";
    }
    else if (lastNum >= 2 && lastNum <= 4 && (lastTwoNums < 12 || lastTwoNums > 14)) {
        dayDeclain = " дня";
    }
    else {
        dayDeclain = " дней";
    }

    if (secondLastNum === 1 && secondlastTwoNums !== 11) {
        dayDeclain = " день";
    }
    else if (secondLastNum >= 2 && secondLastNum <= 4 && (secondlastTwoNums < 12 || secondlastTwoNums > 14)) {
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
        textDays.textContent = `До дня рождения ${futureDate} ${dayDeclain}`;
    }
    else if(days > today) {
        textDays.textContent =`До дня рождения ${diffDays} ${dayDeclain}`;
    }
    else {
        textDays.textContent = "";
    }
}



buttonClick.addEventListener('click', countDays);