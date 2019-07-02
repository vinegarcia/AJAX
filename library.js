const http = new easyHTTP;

//Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts/1', 
// function(err, posts){
//     if(err){
//         console.log(err);
//     } else{
//         console.log(posts);
//     }

// });

//Create data

//make first object
const data = {
    title: 'Custom Post',
    body: 'This is a custom post',

}; 

// http.post('https://jsonplaceholder.typicode.com/posts', data,
//     function(err, posts){
//         if(err){
//             console.log(err);
//         } else {
//             console.log(posts);
//         }
//     });

//Update post
// http.put('https://jsonplaceholder.typicode.com/posts/1', data,
// function(err, posts){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(posts);
//     }
// });

http.delete('https://jsonplaceholder.typicode.com/posts/1',
function(err, response){
    if(err){
        console.log(err);
    } else {
        console.log(response);
    }
});