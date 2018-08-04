function deepEqual(x,y){
    //check if object or not
    if((typeof x) === 'object'&& (typeof y)==='object' && x !== null && y!== null){
        let xkeys = Object.keys(x);
        let ykeys = Object.keys(y);   
        let xindexvalue;
        let yindexvalue;
        //if they have same number of keys or not   
        if(xkeys.length === ykeys.length){
            for(let counter = 0; counter < xkeys.length; counter++){
                xindexvalue =  x[xkeys[counter]];
                yindexvalue = y[ykeys[counter]];
                //break out of recursion if it returns false //loop ends
                if(deepEqual(xindexvalue,yindexvalue) === false)
                {
                    return false;
                }
                //At this point need to recheck if object (nested objects)
                //or if just values compare
                //multiple ifs are not efficent 
                //Therefore recursion would be better use
            }
            return true;
            //if it reaches here it means all are the same
        }//else this means not equal
        else{
            return false;
        }

    }//if not an object
    else{
        //not couting "2" and 2 are the same (no auto conversions)
        if(x===y){
            return true;
        }
    }
    return false;
}


console.log(deepEqual(2,2));//true
console.log(deepEqual(2,"2"));//false

//object test
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true