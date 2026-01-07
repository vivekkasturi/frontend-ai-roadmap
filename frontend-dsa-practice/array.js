Array.prototype.myMap = function(callback, Arg){
    const result = [];

    for(let i=0; i<this.length; i++){
        result.push(callback.call(Arg, this[i], i, this));
    }

    return result;
}

const arr = [1, 2, 3, 4, 5];
const mappedArr = arr.myMap(function(item, index, array){
    return item * 2;
}   );

console.log(mappedArr); 
