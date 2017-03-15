module.exports = [].prototype;

Array.prototype.toTwenty = function(){
    var arr20 = [];
    for(var i = 1; i<= 20; i++){
        arr20.push(i);
    }
    return arr20;
};

Array.prototype.toOneThousand = function(){
    var arr1000 = [];
    for(var i = 10; i<= 1000; i+=10){
        arr1000.push(i);
    }
    return arr1000;
};

Array.prototype.toForty = function(){
    var arr40 = [];
    for(var i = 2; i<= 40; i+=2){
        arr40.push(i);
    }
    return arr40;
};

Array.prototype.search = function search(n) {
    	var length  = this.length,
        	high    = length,
        	low     = 1,
        	mid     = low + Math.floor((high - low)/2),
        	count   = 0;
        
        while (this[mid - 1] !== n) {
            if (n > this[mid - 1]){
               	low  = mid + 1;
               	count++;
            } else {
               	high = mid -1;
            }
            mid  = low + Math.ceil((high - low)/2);

            //return index = -1, if number is not found
            if (low === mid && this[mid - 1] !== n){
                return new holder (count, length, -1);
            } 
        }
        //number is the last element
        if (n === this[length - 1]) return {
        	length: length, index: (high - 1), count: 0
        };
        
        return new holder (count, length, (mid - 1));
};


//function to return Array prototype properties
function holder(count,length,index){
    this.count = count;
    this.length = length;
    this.index = index;
  
}