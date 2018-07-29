function countBs(str1){
    return countChar(str1, "B");
}

function countChar(str1, charFind){
    let counter = 0;
    for(let x=0; x<str1.length; x++){
       
        if(str1[x] === charFind)
        {
            counter++;
        }
    }
    return counter;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
//4