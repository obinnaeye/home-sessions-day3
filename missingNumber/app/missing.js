module.exports = {
    findMissing : function (arr1, arr2) {
        if (arr1.length === 0 && arr2.length === 0 || arr1.length === arr2.length){
            return 0;
        }
        var smallArr = arr1.length > arr2.length? arr2 : arr1,
            bigArr = arr1.length > arr2.length? arr1 : arr2;
        
        var filterArr = bigArr.filter(function(val){
            return smallArr.indexOf(val) === -1;
        })
        return filterArr[0];
    }
}