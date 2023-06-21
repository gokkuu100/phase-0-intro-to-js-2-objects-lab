// Write your solution in this file!
const employee = {name : "James Mwangi", streetAddress : "308 Negro Aroya Lane"}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = {...obj};
    newObj[key]=value;
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key]= value;
    return obj;
}

function deleteFromEmployeeByKey(obj, key) {
    const newObj = {...obj};
    delete newObj[key];
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
}

console.log(updateEmployeeWithKeyAndValue(employee,"name","Ondigo"));
console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Prince Hope"));
console.log(deleteFromEmployeeByKey(employee,"name"));
console.log(destructivelyDeleteFromEmployeeByKey(employee, "name"));
console.log(employee);