let arrayToList = (arr)=>{
    let list = {};
    for(let x=arr.length; x>0 ;x--)
        list = {
            value:arr[x-1],
            rest: list

        }
    return list;
}
//Note editor just gets lazy to render after 3 size array
let myarr = [1,2,3];
console.log("Array to List");
console.log(arrayToList(myarr));
let test = arrayToList(myarr);

let listToArray = (list)=>{
    let myarr =[];
    for(let node = list; node; node =node.rest){
        if((typeof node.value) !== 'undefined')
        {
            myarr.push(node.value);
        }  
    }
    return myarr;
}
console.log("List to Array");
console.log(listToArray(test));

function prepend(elem,list){
    //basically add value to start of list
    let mylist = {};
    mylist ={
        value:elem,
        rest:list
    } 
    return mylist;
}

console.log("Add data to list");
console.log((10,test));

function nth(list,number){
    //find list at this number index
    let data= list.value;
    for(let x = 0; x <number; x++){
        list = list.rest
    }
    return data;
}
console.log("Find nth list element");
console.log(nth(test,1));
//recursive version
function nth2(list,number){

    let data = list.value;
    if(number > 0){
        number--;
        list = list.rest;
        data = nth2(list,number);
    }
    return data;
}
//Note remember recursion in javascript is about 3x slower than loops
console.log("Find nth list element recursive version");
console.log(nth2(test,0));
