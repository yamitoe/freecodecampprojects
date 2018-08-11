//Basics of functions

let test = (x)=> {x*x};
console.log(test(10));
//watch you passed a value 10 to the function yet its undefined
//Its beacuse you need to return the value or else the function just ends there

//Remember the two primiary function of functions

//1. Call it and it does a thing, ie - prints to console
//2. Return a value, it does some expressions you get a value back
//to get that value back you must use the "return" keyword

let test2 = (x)=>{return x*x};
console.log(test2(10));


function returnFunction(x){
    return (z)=>{return z*x};
    //no clue why if I add parathesis it doesnt work?
    //probably scope problem
}

console.log(returnFunction(10)(2));