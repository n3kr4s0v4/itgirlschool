const weight = document.querySelector('.weight__num');
const height = document.querySelector('.height__num');
const total = document.querySelector('.calc__result');
const info = document.querySelector('.result__info');
const buttonCalc = document.querySelector('.calc__button');

const meter = 100;
const power = 2;
const text = "Индекс массы тела (ИМТ): ";
const weightInade = 'ИМТ менее 18.5: Недостаточный вес. Это может указывать на недостаточное питание или другие проблемы со здоровьем.';
const weightNormal = 'ИМТ от 18.6 до 24.9: Нормальный вес. В этом диапазоне считается, что вес находится в здоровых пределах.';
const weightExcess = 'ИМТ от 25.0 до 29.9: Избыточный вес. В этой категории есть некоторый риск развития связанных с ожирением заболеваний.';
const obesityFirst = 'ИМТ от 30.0 до 34.9: Ожирение I степени. Риск развития заболеваний, связанных с ожирением, значительно повышен.';
const obesitySecond = 'ИМТ от 35.0 до 39.9: Ожирение II степени. Риск развития серьезных заболеваний, таких как диабет и сердечно-сосудистые заболевания, очень высок.';
const obesityThird = 'ИМТ 40 и выше: Тяжелое ожирение (ожирение III степени). Высокий риск развития серьезных заболеваний и осложнений.';


function calculateBMI () {
    const weightNum = +weight.value;
    const heightNum = +height.value / meter;
    const heightSqr = Math.pow(heightNum, power);
    const resultSub = weightNum / heightSqr;
    result = Math.round(resultSub * 100) / 100; 

    if(weight.value === "" && height.value === "") {
        alert('Введите значение!');
    }
    else if(weight.value === ""){
        alert('Введите значение!');
    }
    else if(height.value === ""){
        alert('Введите значение!');
    }
    else {
        total.textContent = text + result;
        weight.value = "";
        height.value = "";
    }
}

function sayInfo(){
    if (result <= 18.5) {
        info.setAttribute('class', 'warning');
        info.textContent = weightInade;
    }
    else if( (result >= 18.6) && (result <=24.9)) {
        info.setAttribute('class', 'normal');
        info.textContent = weightNormal;
    }
    else if ((result >= 25.0) && (result <=29.9)) {
        info.setAttribute('class', 'warning');
        info.textContent = weightExcess;
    }
    else if ((result >= 30.0) && (result <=34.9)) {
        info.setAttribute('class', 'warning');
        info.textContent = obesityFirst;
    }
    else if ((result >= 35.0) && (result <= 39.9)) {
        info.setAttribute('class', 'dangerous');
        info.textContent = obesitySecond;
    }
    else if (result >= 40.0) {
        info.setAttribute('class', 'dangerous');
        info.textContent = obesityThird;
    }
    else {
        info.textContent = "";
    }
}

buttonCalc.addEventListener('click', calculateBMI);
buttonCalc.addEventListener('click', sayInfo)
