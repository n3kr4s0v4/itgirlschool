let message = "Стоимость покупки: ";
let xxx ;

function calculateTotalPrice(quantity = 2, price = 15000) {
    xxx = quantity * price;
    let xxxRub = xxx.toLocaleString('ru-RU');
    alert (message + xxxRub + " рублей");
}

// Ниже код, который выводит текст под картинки)

/* const total = document.querySelector(".total");
function calculateTotalPrice(quantity = 2, price = 15000) {
    xxx = quantity * price;
    let xxxRub = xxx.toLocaleString('ru-RU');
    total.textContent = message + xxxRub + " рублей";
} */