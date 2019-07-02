//ES5 OOP library
//this to use other data in other file
function easyHTTP() {
    this.http = new XMLHttpRequest();
}

//Make http GET request es5
// easyHTTP.prototype.get = function(url, callback) {
//     this.http.open('GET', url, true);
//     let self = this;
//     this.http.onload = function(){
//         if(self.http.status === 200){
//             callback(null, self.http.responseText);
//         } else {
//             callback('Error: ' + self.http.status)
//         }
//     };

//     this.http.send();
// }

//arrow function for es6
//arrow function to not declare and use variable self
// function easyHTTP() {
//     this.http = new XMLHttpRequest();
// }

//Make http GET request
// easyHTTP.prototype.get = function(url, callback) {
//     this.http.open('GET', url, true);
    
//     this.http.onload = () => {
//         if(this.http.status === 200){
//             callback(null, this.http.responseText);
//         } else {
//             callback('Error: ' + this.http.status)
//         }
//     };

//     this.http.send();
// }


//Make an HTTP Post Request
//in post we need a data
// easyHTTP.prototype.post = function(url, data, callback) {
//     this.http.open('POST', url, true);
//     //if API you you will put in http request header is application/json
//if not api sometimes we use ccs/text, html/text, http/text
//     this.http.setRequestHeader('Content-type', 'application/json');

//     let self = this;

//     this.http.onload = function(){
//         callback(null, self.http.responseText);
//     }
    
//     this.http.send(JSON.stringify(data));
// }
//Make an HTTP PUT Request
easyHTTP.prototype.put = function(url, data, callback){
    this.http.open('PUT', url, true);

    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this;

    this.http.onload = function(){
        callback(null, self.http.responseText);
    }
    this.http.send(JSON.stringify(data));
}
//Make an HTTP DELETE Request
easyHTTP.prototype.delete = function(url, callback){
    this.http.open('DELETE', url, callback);

    let self = this;
    this.http.onload = function(){
        if(self.http.status === 200){
            callback(null, 'Post Deleted');
        } else {
            callback('Error: ' + self.http.status);
        }
        
    }
    //no stringify because there's no data
    this.http.send();
    
}