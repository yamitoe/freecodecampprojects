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
    let node = list;
    let data = 0;
    //list = list.rest //might also work but looks awks
    for(let x = 0; x <=number; x++){
        node = node.rest
      
        
    }
    data = node.value;

    return data;
}
console.log("Find nth list element");
console.log(nth(test,1));
