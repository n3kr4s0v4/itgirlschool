const addButton = document.querySelector('.add__post');
const posts = document.querySelector('.posts');
const titleInput = document.querySelector('#title');
const textInput = document.querySelector('#text');
function addPost () {
     fetch('https://jsonplaceholder.typicode.com/posts', {
     method: 'POST',
     body: JSON.stringify({
          title: titleInput.value,
          body: textInput.value
     }),
     headers: {
          'Content-type': 'application/json; charset=UTF-8'
     }
})
.then(res => res.json())
.then((data) => {
     const titlePost = document.createElement('div');
     const textPost = document.createElement('div');
     titlePost.innerHTML = data.title;
     textPost.innerHTML = data.body;
     titlePost.setAttribute('class', 'titlePost');
     textPost.setAttribute('class', 'textPost');
     posts.append(titlePost);
     posts.append(textPost);

     titleInput.value = '';
     textInput.value = '';
})
.catch((err) => console.log(Error, err))
}

addButton.addEventListener('click', addPost);