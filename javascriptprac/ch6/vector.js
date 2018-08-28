class Vec{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
//shorthand key method //takes another Vector class as a parameter
    plus(vector){
        return `x: ${(this.x+vector.x)} y: ${(this.y+vector.y)}`;
    }

    minus(vector){
        return `x: ${(this.x-vector.x)} y: ${(this.y-vector.y)}`;
    }
//distance from origin (0,0) //As in the length away from it //diagonal
    get length(){
        let distance = Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2));
        return `x: ${distance}`;
    }
}

let normal = new Vec(3,4);
console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(normal.length);
// → 5