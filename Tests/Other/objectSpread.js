//INPUT
let obj1 = {
    a: "a",
    b: "B",
    c: "C"
};

//EXPECTED OUTPUT FORM: {a: "A", b: "B", c: "C"}
let keyA = { a: "A" };
obj1 = {
    ...obj1,
    ...keyA
};
console.log(obj1);