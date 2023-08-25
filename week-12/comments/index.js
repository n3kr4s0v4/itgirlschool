const userName = document.getElementById('userName');
const userAvatar = document.getElementById('userAvatar');
const userComm = document.getElementById('userComm');
const buttonClick = document.querySelector('.comm__button');
const imgUser = document.querySelector('img');
const chatName = document.querySelector('.chat__name');
const comment = document.querySelector('.text__comm');
const chat = document.querySelector('.chat__text');

function checkSpam () {
    if (userComm.value === "" && userAvatar.value === "" && userName.value === "") {
        alert('Заполните поля!');
    }

    else if (userComm.value === "") {
        alert('Не все поля заполнены!');
    }

    else if (userName.value === "") {
        alert('Не все поля заполнены!');
    }

    else if (userAvatar.value === "") {
        alert('Не все поля заполнены!');
        comment.textContent = "";
    }

    else {
        const newComm = userComm.value;
        comment.textContent = newComm.replace(/xxx/gi, "***").replace(/viagra/gi, "***");
        userComm.value = "";

        const newName = userName.value;
        const newNameSpace = newName.replace(/ /g, "");
        chatName.textContent = newNameSpace[0].toUpperCase() + newNameSpace.slice(1).toLowerCase();
        userName.value = "";
    
        const newImg = userAvatar.value;
        imgUser.src = newImg;
        userAvatar.value = "";
    
        chat.setAttribute('class', 'chat__border');
    }
}

buttonClick.addEventListener('click', checkSpam);