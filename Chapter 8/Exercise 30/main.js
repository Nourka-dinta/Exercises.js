// Implementing Your Own 'Callbacks'

function operate(a,b, callback){
    return callback(a,b);
} 

function add(a,b){
    return a + b ;
}

function subt(a,b){
    return a - b;
}

function mult(a,b){
    return a * b;
}

function div(a,b){
    return a / b;
}

console.log("Addition ", operate(2,3, add));
console.log("Subtration ", operate(30,10, subt));
console.log("Multiply ", operate(9,5, mult));
console.log("Divide ", operate(100,4, div));