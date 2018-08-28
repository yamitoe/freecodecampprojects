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