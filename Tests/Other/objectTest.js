const obj1 = {
    'a': 1,
    'b': this.a     //Won't work even with obj1
};
console.log(obj1);

const obj2 = {
    'a': this.b,
    'b': 1
};
console.log(obj2);