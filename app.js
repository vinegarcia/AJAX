// document.getElementById('Button').addEventListener('click', function(){

// });

document.getElementById('Button').addEventListener('click', loadData);

function loadData(){
    //Create an XHR Object
    //instatntiate
    const xhr = new XMLHttpRequest();

    //open
    //http verb get,post,delete,put to update
    //xhr.wantproperty.('wanthttpverb', 'wanttoget', boolean true if asynchronous);
    xhr.open('GET', 'data.txt', true);
    // xhr.open('GET', 'data.text', true); // for error


    xhr.onload = function() {
        console.log('READYSTATE', xhr.readyState);
        if(this.status === 200){                           //this refered to xhr 
            // console.log(this.responseText);   
            document.getElementById('output').innerHTML = `<h6>${this.responseText}</h6>`;             
        }
    }

    //to check ready state
    // xhr.onreadystatechange = function(){
    //     console.log('READYSTATE', xhr.readyState)
    //     if(this.status === 200 && this.readyState === 4){
    //         console.log(this.responseText);                  
    //     }
    // }

    xhr.onerror = function(){
        console.log('Request error');
    }

    xhr.send();



    //readyState values
    //0;  request not initialized
    // 1: server connection establshed
    //2:  request received
    //3: processing request
    //4: request finished and response is ready

    //http statuses
    //200"OK"
    //403 "Forbidden"
    //404 "not okay"
}