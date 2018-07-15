let test = "";
let size = 8;
let alternateValue;
let choice2;
for(let col=0; col < size; col++){

  for(let hor=0;hor<size;hor++){
    
    //initail value
  if(col%2==0)
    {
      alternateValue = " "; 
      choice2 = "#";
    }
    else
    {
     	alternateValue= "#"; 
      choice2=" ";
    }
 
    //Alternate
    if(hor % 2 ==0)
    {
      test+= alternateValue;
    }
    else
    {
      test += choice2;
    }
    
    
  }
  
    test +="\n"
}
console.log(test);
