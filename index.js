let obj = {
    age:12,
    wt:67,
    height:180
};
console.log(obj);
// run time changing
obj.color = "white";
console.log(obj);


// SPREAD OPERATOR CLONING
let org = {
    age: 12
};
let clone = {...org};
console.log("Original Object: ", org);
console.log("Cloned Object: ", clone);
// ab agar me original me changing karunga tou clone me nhi hogi qk y dono alag alag objects hain na k same
org.wt = 160;
console.log("Original Object: ", org);
console.log("Cloned Object: ", clone);


// CLONING THROUGH ASSIGN METHOD
let org2 = {
    name: "Anas"
};
let clone2 = Object.assign({}, org2); // This line means k is {} khali object me org2 ko clone kardo.
console.log(org2);
console.log(clone2);


// THROUGH ITERATION METHOD
let org3 = {
    name: "Anas",
    age: 20
};
let clone3 = {};
for(let key in org3) {
    let newKey = key;
    let newValue = org3[key];
    // insert newKey and value in clone3 and create a clone
    clone3[newKey] = newValue; 
}
console.log(org3);
console.log(clone3);