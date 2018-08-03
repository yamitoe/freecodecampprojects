function deepEqual(x,y){
    let output = false;

    //check if object or not
    if((typeof x) === 'object'&& (typeof y)==='object' && x !== null && y!== null){
        let xkeys = Object.keys(x);
        let ykeys = Object.keys(y);   
        console.log("The key data: "+xkeys[0]);
        let test = xkeys[0];
        console.log(x[xkeys[0]]); //square bracket noation
     

        for(let counter = 0; counter < xkeys.length; counter++)
        {
           // x.xkeys[counter];
            //onsole.log(x.xkeys[counter]);
        }

    }
    else{
        //not couting "2" and 2 are the same (no auto conversions)
        if(x===y)
        {
            output = true;
        }
    }



    return output;
}
let name ={first:2, last:"aye"};
let name2 = {first:2, last:"aye"};
deepEqual(2,name);
//deepEqual();
console.log(deepEqual(2,2));
console.log(deepEqual(2,"2"));
console.log("int and obj: "+deepEqual(2,name.first));
//when two ojects compare eachother if not pointing to same data then it will be false
//even if the values are the same
console.log(deepEqual(name2,name));