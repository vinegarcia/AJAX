//CALLBACK FUNCTIONS

const posts = [{title: 'Post One', body: 'This is a post one'}, {title: 'Post Two', body: 'This is a post two'}];

//function createPost(variable)
function createPost(post){
    setTimeout (function(){
        posts.push(post);
    }, 2000);
}

function getPosts(){
    setTimeout(function(){
        let output = '';
        posts.forEach(function(post){
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000);
}

//createPost(kung ano yung ilalagay na object)
createPost({title: 'Post Three', body: 'This is a post three'}
);

getPosts();

// function createPost(variable, callback)
function createPost(post, callback){
    setTimeout (function(){
        posts.push(post);
        callback();
    }, 2000);
}

function getPosts(){
    setTimeout(function(){
        let output = '';
        posts.forEach(function(post){
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000);
}

//createPost(kung ano yung ilalagay na object)
createPost({title: 'Post Three', body: 'This is a post three'}, getPost);