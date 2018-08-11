let test = "";
let size = 8;

for(let col=0; col < size; col++){
  for(let hor=0;hor<size;hor++){
    if((hor + col) % 2 ==0)
    {
      test+= " ";
    }
    else
    {
      test += "#";
    }
  }
    test +="\n"
}
console.log(test);