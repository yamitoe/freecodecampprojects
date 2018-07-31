let reverseArray = (arr)=>{
    let newarr = [];
    for(index of arr){
        newarr.unshift(index);
    }
    return newarr;
}
let test = [1,2,3,4];
console.log(reverseArray(test));

let reverseArrayInPlace = (arr)=>{
    let temp;
    let counter = 0;
    let insize = arr.length -1;
    for(let x = 0; x< arr.length;x++){
       for(let y =0; y< (insize - x);y++){
           temp = arr[y+1];
           arr[y+1] = arr[y];
           arr[y] = temp;
           //console.log(`${insize -x}`);
       }
    }
    return arr;
}
console.log(reverseArrayInPlace(test));
