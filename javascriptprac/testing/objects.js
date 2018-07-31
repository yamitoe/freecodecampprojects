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
//convert to JSON //only difference is keys are all in quotes
//^^ it like when the key name isnt valid so need to be in quotes
let outJSON = JSON.stringify(ourVar);
console.log("Converted to JSON" + outJSON);
console.log(outJSON.first); //will be undefined //assuming conversion changes the type
console.log(JSON.parse(outJSON).first); //must convert back

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

