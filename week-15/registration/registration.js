function check() {
    let username = document.getElementById ('firstName').value
    let telNum = document.getElementById ('number').value
    let email = document.getElementById ('mailbox').value
    let userLastname = document.getElementById ('lastName').value
    let pass = document.getElementById ('password').value
    let pass2 = document.getElementById ('password2').value

    document.getElementById ('errorMessage').innerHTML = "" 
    document.getElementById ('telError').innerHTML = ""
    document.getElementById ('passError').innerHTML = ""

    if (telNum.length <10 || telNum.length >10) {
        document.getElementById('telError').innerHTML += "Неверно заполнен номер телефона<br>"
    }

    if (pass != pass2) {
        document.getElementById('passError').innerHTML += "Пароли не совпадают<br>"
    }

    if (username && email && telNum && userLastname && pass && pass2) {
        alert ('Добро пожаловать, ' + username + '!')
}
    else {
        document.getElementById('errorMessage').innerHTML += "Поля не заполнены<br>"
    }
}
