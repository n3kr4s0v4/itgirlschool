const titleBody = document.querySelector('h1');
const newBody = document.createElement('div');
newBody.setAttribute('class', 'newBody');
titleBody.append(newBody);
fetch('https://jsonplaceholder.typicode.com/posts')
.then((res) => res.json())
.then((data) => {
     data.forEach(element => {
          const titlePost = document.createElement('div');
          const bodyPost = document.createElement('div');
          titlePost.innerHTML = element.title;
          bodyPost.innerHTML = element.body;
          titlePost.setAttribute('class', 'titlePost');
          bodyPost.setAttribute('class', 'bodyPost');
          newBody.append(titlePost);
          newBody.append(bodyPost);
     })
.catch((err) => {
     console.log(Error, err);
})
})