const userName = document.getElementById('userName');
const userAvatar = document.getElementById('userAvatar');
const userComm = document.getElementById('userComm');
const buttonClick = document.querySelector('.comm__button');
const chatBlock = document.querySelector('.chat');
const radio = document.querySelector('input[name = "radio"]');

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
        chatBlock.classList.add('chat__block');

        const chatInfo = document.createElement('div');
        chatInfo.classList.add('chat__info');
        chatBlock.append(chatInfo);

        const newImg = document.createElement('img');
        newImg.src = userAvatar.value;
        newImg.classList.add('img');
        chatInfo.append(newImg);
        userAvatar.value = "";

        const chatName = document.createElement('div');
        chatName.classList.add('chat__name');
            const newName = userName.value;
            const newNameSpace = newName.replace(/ /g, "");
            chatName.textContent = newNameSpace[0].toUpperCase() + newNameSpace.slice(1).toLowerCase();
            chatInfo.append(chatName);
            userName.value = "";

        const dateComm = document.createElement('div');
        const commDate = new Date();
        dateComm.textContent = commDate.toLocaleString();
        dateComm.classList.add('date__comm');
        chatBlock.append(dateComm);

        const chatText = document.createElement('div');
        chatText.setAttribute('class', 'chat__border');
        chatText.classList.add('chat__text');
        chatBlock.append(chatText);

        const comment = document.createElement('div');
        comment.classList.add('text__comm');
        const newComm = userComm.value;
        comment.textContent = newComm.replace(/xxx/gi, "***").replace(/viagra/gi, "***");
        chatText.append(comment);
        userComm.value = "";
    }

}

buttonClick.addEventListener('click', checkSpam);
