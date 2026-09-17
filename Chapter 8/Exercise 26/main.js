// Blocking code
console.log("/* Blocking code */")
function synchronous(){
        alert("Clic ok");
        return "Waa lasoo dahay";
}

const user = synchronous();
console.log(user);

// Non-Blocking code
console.log("/* Non-blocking */");
function Asynchronous(callback){
    setTimeout(() => {
        callback("Waa lasoo dahay");
    }, 2000);
}

Asynchronous(function (user){
    console.log(user);
});

