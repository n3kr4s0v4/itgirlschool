const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');
const fourth = document.querySelector('.fourth');

let firstItem  = +first.innerHTML;
let secondItem = +second.innerHTML;
let thirdItem = +third.innerHTML;
let fourthItem = +fourth.innerHTML;

const totalPrice = document.querySelector('.total__price');
const result = totalPrice;
const rub = " руб.";
result.textContent = firstItem + secondItem + thirdItem + fourthItem + rub;

const buttonCart = document.querySelector('.cartshop__button');
const percent = 0.2;

function clickMe () {
    const newFirstItem = firstItem - firstItem * percent;
    first.textContent = newFirstItem;
    const newSecondItem = secondItem - secondItem * percent;
    second.textContent = newSecondItem;
    const newThirdItem = thirdItem - thirdItem * percent;
    third.textContent = newThirdItem;
    const newFourthItem = fourthItem - fourthItem * percent;
    fourth.textContent = newFourthItem;
    result.textContent = newFirstItem + newSecondItem + newThirdItem + newFourthItem + rub;
}

buttonCart.addEventListener('click', clickMe);