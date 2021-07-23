/*
Callbacks
*/

/*
This code will only paint 2 of the 3 posts onto the webpage despite
the fact that a third post was created. This is because the posts are 
painted after 1000 ms (1s) and the third post is created after 2000ms(2s).
This is an example of synchronous code as only one function or action happens
at a time.

const posts = [{title:'Post One', body:'This is post one'},
                {title:'Post Two', body:'This is post two'}];


function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post){
    setTimeout(() => {
        posts.push(post);
    }, 2000);
}

getPosts();

createPost({title:'Post Three', body: 'This is post three'});

The code below will fix the above code using callback functions to 
make the code asynchronous.
*/

const posts = [{title:'Post One', body:'This is post one', num:1},
                {title:'Post Two', body:'This is post two', num:2}];


function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback){
    setTimeout(() => {
        posts.push(post);
        console.log(posts);
        callback();
    }, 2000);
}

/* 
getPosts becomes the callback function so it runs
right after posts.push(post); and doesn't wait 2 seconds
for the entire function. 
*/

createPost({title:'Post Three', body: 'This is post three', num:3}, getPosts);

/* 
This statement will return the posts array with only 2 objects in 
despite being called after the createPost function.
This is because the createPost function is waiting 2 seconds so during 
this time the below statement is executed before the new post has been
created.
*/
console.log(posts);