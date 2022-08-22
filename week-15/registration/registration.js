function sayHello () {
    let username = document.getElementById ('firstName').value
    if (username) {
        alert ('Добро пожаловать, ' + username + '!')
    }
    else {
        alert ('Не все поля заполнены!')
    }
}
function checkTel() {
    let telNum = document.getElementById ('number')
    let email = document.getElementById ('mailbox')

    document.getElementById ('Error').innerHTML = "" 
    if (email.value == '') {
        document.getElementById('Error').innerHTML += "Ваш имейл не заполнен"
    }

    if (telNum.value.length <10) {
        alert ('Неверно указан телефон!')
    }
    else if (telNum.value.length >10) {
        alert ('Неверно указан телефон!')
    }
    else {
        alert ('Не все поля заполнены!')
    }
}
