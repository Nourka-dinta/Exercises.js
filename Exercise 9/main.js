let car = {
    make : "Iveco",
    model : "Tracker",
    year : "2026",
    start : () => {
        console.log("The car has started")
    }
}

console.log(car.make);
console.log(car.model);
console.log(car.year);

// qaabka array

console.log(car["year"]);
console.log(car["model"]);
console.log(car["make"]);

console.log(car.start());