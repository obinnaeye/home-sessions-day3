module.exports = {
    
    Array: new Array()
}

Array.prototype.toTwenty = function(){
    var arr20 = [];
    for(var i = 1; i<= 20; i++){
        arr20.push(i);
    }
    return arr20;
}

Array.prototype.toOneThousand = function(){
    var arr1000 = [];
    for(var i = 10; i<= 1000; i+=10){
        arr1000.push(i);
    }
    return arr1000;
}

Array.prototype.toForty = function(){
    var arr40 = [];
    for(var i = 2; i<= 40; i+=2){
        arr40.push(i);
    }
    return arr40;
}