module.exports = [].prototype;

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

Array.prototype.search = function (searchElement) {
    const self = this;
    //console.log(self);
    const first = self[0];
    const last = self[self.length - 1];
    self.count = 0;
    self.index = -1;

    //console.log(self);
	var start = 0;
    var end = self.length - 1;
    var currentIndex;
    var currentElement;
    if (searchElement > last || searchElement < first){
        return new holder (self.count,self.length,self.index);
    }else{
        while (start <= end) {
            currentIndex = Math.floor((start + end) / 2);
            currentElement = self[currentIndex];
            if (self[start]  === searchElement) {
                 self.index = start;
                  break;
             }
             else if (self[end]  === searchElement){
                 self.index = end;
                  break;
             }else if (currentElement < searchElement) {
                start = currentIndex + 1;
            }
            else if (currentElement > searchElement) {
                end = currentIndex - 1;
            }
            else {
                self.index = currentIndex;
                break;
            }
    	    self.count++;
        }   
    }
    


   return new holder (self.count,self.length,self.index);
  
};


function holder(count,length,index){
  
    this.count = count;
    this.length = length;
    this.index = index;
  
}