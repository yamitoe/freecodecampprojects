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