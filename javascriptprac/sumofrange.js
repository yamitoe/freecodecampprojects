let range = (start,end, step =1)=>{
    let myArr = [];
    if(step<0){
        while(start>=end){
            myArr.push(start)
            start+= step;
        }
    }
    else{
        while(start<=end){
            myArr.push(start)
            start+= step;
        }
    }

    return myArr;
}

console.log(range(5,2,-1));
console.log(range(1,10,1));



let sum = (arrNum)=>{
    let total = 0;
    for(number of arrNum){
        total += number;
    }
    return total;
}

console.log(sum(range(1,10)));