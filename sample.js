function may(){
    this.princess = new XMLHttpRequest();
}

may.prototype.get = function(url, callback){
    this.princess.open('GET', url, true);
    let cess = this;
    this.princess.onload = function(){
        if(cess.princess.status === 200){
            callback(null, cess.princess.responseText)
        } else {
            callback('Error: ' + cess.princess.status)
        }
    }
}