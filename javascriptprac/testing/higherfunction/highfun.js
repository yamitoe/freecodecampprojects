function doublefunc(x,action){
    for(value of x){
        action(value);//inputting value into action parameter //"test" in this case
        //you can consider "action" to be the variable its assigned to
        // let action = test => ....
    }
}
let arr = [1,2,3,4,5];
doublefunc(arr, test=>{console.log(`Takeing input from inside function: ${test}`)} );


let z = (x,y)=>{
    console.log(`Above function is similair to this but inversed: ${x+y}`);
};
z(2,3);

///===========
function returnFunction(x){
    return (z)=>z*x;
    //no clue why if I add parathesis it doesnt work?
    //probably scope problem
}
let firstnum = returnFunction(5);
let secondnum = firstnum(2);
console.log(firstnum);
console.log(secondnum);
//==================================
function argTest(...args) {
      console.log("calling with", args);
  }
  argTest(3, 5, 1);

//unlimited args but double function //changes orginal function
function noisy(action) {
    return (...args) => {
      console.log("calling with", args);
      let result = action(...args); //action which is a value function
      //Give that function these args
      console.log("called with", args, ", returned", result);
      return result;
      //instead of returning the args we returned the result of mathmin
    };
  }
  noisy(Math.min)(3, 2, 1);
//================
["A", "B"].forEach(l => console.log(l));
//calling your own function that you made with dot notation similar to foreach
//console.log(SCRIPTS.filter(s => s.direction == "ttb"));

//that are already implemented
//higher functions include forEach, map, filter

//These currently cant run yet
//will most likely need to use a transpiler (Webpack, babel)

//filter arrary by some test function then return those that pass
function filter(array,test){
    let passed = [];
    //array of objects
    for(let element of array){
        //function value ->tests scripts
        if(test(element)){
            passed.push(element);
        }
    }
    return passed;
}
console.log(filter(SCRIPTS, script => script.living));
//calling the premade standard array method
console.log(SCRIPTS.filter(s => s.direction == "ttb"));

//transforming
//takes array, takes function value to go layer deeper in object
function map(array, transform) {
    let mapped = [];
    for (let element of array) {
      mapped.push(transform(element));
    }
    return mapped;
  }
  
  let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
  console.log(map(rtlScripts, s => s.name));
  // → ["Adlam", "Arabic", "Imperial Aramaic", …]
  //calling pre-made
  console.log(rtlScripts.map(s => s.name));


  // compute a single value

  //combine function tells it what arithmetic expression to use
  //want to add? count chars? multiple?
function reduce(array, combine, start) {
    let current = start;
    for (let element of array) {
        //pass intial value and array value and send it to function
        //dpending what "combine" is actaully specefied it can 
        //add, multiple or even just count
      current = combine(current, element);
    }
    return current;
  }
  
  console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
  // → 10
  //the actaul standard method reduce lets you omit the starting value


   //if array is bigger than 0
  console.log([1, 2, 3, 4].reduce((a, b) => a + b));


  function characterCount(script) {

    //script is an array //ranges=is a property of the object script //reduce is our function
   // script['ranges'].reduce(......)
   //^^ way better way of writing it so you can identify function from object propety

    //reduce will take said array 
    //the function is the aggregate expression
    //the zero is the starting value

    //As per usual, "count" is the intial starting value in which case is zero
    //[from,to] is the element value of the array we are loooping
    //since our script is literally an arrary of arrays
    //so the loop element would get [123,456]
    //by usinbg destructuing paramter we get the 123 456 values instead

    //The goal here is to see the count of the ranges
    return script.ranges.reduce((count, [from, to]) => {
      return count + (to - from);
    }, 0);
  }

