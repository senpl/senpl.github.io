Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

function storeInBrowser(name,rating,element) {
    //let previousRank=localStorage.getObj('ranking')
    console.log(name, rating)

    localStorage.setObj(name,rating)
    
    // localStorage.setObj("ranking",previousRank);
    //document.getElementById('result').innerHTML = name + '<br></br>'+rating
    getStored(element,element)
}

function getStored(element,key){
    console.log(localStorage)
    console.log(localStorage.getObj(key))
    element.value = localStorage.getObj(key);
}

function storePrefInBrowser(name,element) {
    //let previousRank=localStorage.getObj('ranking')
    console.log(name, element)
    if(element == undefined){
        localStorage.setObj(name,0)
    }else{
        localStorage.setObj(name,element)
    }
    
    // localStorage.setObj("ranking",previousRank);
    //document.getElementById('result').innerHTML = name + '<br></br>'+rating
    getStored(element,element)
}

// function getStored(){
//     let text
//     for (var i = 0; i < localStorage.length; i++){
//         text=text + ' '+ localStorage.key(i) + ' '+ localStorage[localStorage.key(i)]
//     }
//     document.getElementById('result').innerHTML = text;
// }

function clearRating(){
    localStorage.clear()
}
