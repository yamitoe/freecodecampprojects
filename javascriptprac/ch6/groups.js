class Group{
    constructor(){
        this.group = [];
    }

    add(value){
        //checks if value is in group
        for(let test of this.group){
            //if already exsist exit 
            if(test === value){
                return;
            }
        }
        //not in group --add
        this.group.push(value);
    }

    delete(value){
        for(let test of this.group){
            if(test === value){
                let index = this.group.indexOf(value);
                this.group.splice(index,1);
                return;
            }
        }
    }

    has(value){
        //finds if value exsists
       return this.group.includes(value);

    }

    static from(object){
        let x = new Group();
        for(let value of object){
            x.group.push(value);
        }
        return x;
    }
}
//Make this object iterable
// needs next() return object + 'done' object propety + the data sent back named "value"
//^^ if missing any of the corrsponding names it won't work 
class GroupIterator{
    constructor(array){
        this.group = array.group;
        this.counter = 0;
    }
    //it must always return an object, no other data type will work
    //"value" variable must be an object
    next(){
        if(this.group.length == this.counter){
            return {done: true};
        }
        let value = {index: this.counter, value: this.group[this.counter]};
        this.counter++;
        return {value, done:false};
    }
}

Group.prototype[Symbol.iterator] = function(){
    //this should refer to {group: _ ,_}
    return new GroupIterator(this);
};

//testing
let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false


for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }
  // → a
  // → b
  // → c
//-----------------------
  //hasOwn ignores prototypes propties //so would ignore itself if in object
  let map = {one: true, two: true, hasOwnProperty: true};
  //Work around is call Object.prototype which is what all objects derive from
  //since hasOwnProperty is one of said propities from that
  //call explictly calls a method and subs "this" object with first parameter
  console.log(Object.prototype.hasOwnProperty.call(map,"one"));
// → true