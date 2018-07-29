//curly brackets for objects
let journal ={
    month: "Nov",
    day: 5,
    time: 12
}

console.log(journal);
console.log(journal.month);

function person(x,y){
    return {
        first:x, 
        lastname:y
    };
}

let ourVar = person("Jem","as");
console.log(person("Jem","as"));
console.log(ourVar.first);

function test(){
    return 2;
}

console.log(test());

function pera(){
    return{
        first:1,
        last:2
    };
}
console.log(pera());
